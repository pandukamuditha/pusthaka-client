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

  setSession(sessionData) {
    const expiresAt = moment().add(sessionData.expiresIn, 'second');

    localStorage.setItem('token', sessionData.token);
    localStorage.setItem('expiresAt', expiresAt.toString());
    localStorage.setItem('userRole', sessionData.userRole);
    localStorage.setItem('userId', sessionData.userId);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');

    this.router.navigateByUrl('/');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserInfo() {
    return {
      userId: localStorage.getItem('userId'),
      userRole: localStorage.getItem('userRole')
    };
  }

  isLoggedIn() {
    return moment().isBefore(this.getTokenExpiration());
  }

  getTokenExpiration() {
    const expiresAt = localStorage.getItem('expiresAt');
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
