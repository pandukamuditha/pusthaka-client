import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Lending } from '../../models/lending';

const baseUrl = 'http://localhost:3000/api/lendings/';

@Injectable({
  providedIn: 'root'
})
export class LendingService {

  constructor(
    private httpClient: HttpClient
  ) { }

  lendBook(userId: string, bookId: string, copyId: string) {
    return this.httpClient.post(
      baseUrl,
      {
        user: userId,
        book: bookId,
        copy: copyId
      }
    ).pipe(
      retry(3)
    );
  }

  getAllBooksByUser(userId: string) {
    return this.httpClient.get(
      baseUrl + 'user/' + userId,
      {
        params: {
          type: 'all'
        }
      }).pipe(
      retry(3)
    );
  }

  getAll(type: string) {
    return this.httpClient.get(
      baseUrl + 'all',
      {
        params: {
          type: type
        }
      }).pipe(
      retry(3)
    );
  }
}
