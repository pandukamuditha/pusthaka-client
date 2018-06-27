import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/patron/';

@Injectable({
  providedIn: 'root'
})
export class PatronService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getProfile() {
    return this.httpClient.get(baseUrl + 'profile')
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occured. Please try again later.');
  }

}
