import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { catchError, map, retry } from 'rxjs/operators';
import * as moment from 'moment';
import { throwError } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(user: User) {
    const httpParams = new HttpParams()
      .set('username', user.username)
      .set('password', user.password);

    return this.httpClient.post<any>(
      baseUrl + '/login',
      httpParams
    ).pipe(
      retry(3),
      map(res => {
        if (res.auth) {
          this.setSession(res);
          return res;
        }
      }),
      catchError(this.handleError)
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('role');
  }

  setSession(sessionData) {
    const expiresAt = moment().add(sessionData.expiresIn, 'second');

    localStorage.setItem('token', sessionData.token);
    localStorage.setItem('expires_at', expiresAt.toString());
    localStorage.setItem('role', sessionData.role);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return moment().isBefore(this.getTokenExpiration());
  }

  getTokenExpiration() {
    const expiresAt = localStorage.getItem('expires_at');
    return moment(expiresAt);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMsg;
    if (error.error instanceof ErrorEvent) {
      errorMsg = 'An error occured. Please try again later.';
    } else {
      if (error.error === 'No user found.') {
        errorMsg = 'Username not valid.';
      } else if (error.status === 401) {
        errorMsg = 'Password not valid.';
      } else {
        errorMsg = 'Server error.';
      }
    }
    return throwError(errorMsg);
  }

}
