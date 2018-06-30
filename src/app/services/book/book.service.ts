import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Book } from '../../models/book';

const baseUrl = 'http://localhost:3000/api/books/';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getBook(id: string) {
    return this.httpClient.get(baseUrl + id).pipe(
    );
  }

  getNewReleases(category: string) {
    return this.httpClient.get<Book[]>(
      baseUrl + 'new',
      {
        params: { category: category }
      }).pipe(
        retry(5)
      );
  }

  getBooksBySearch(category: string, searchQuery: string) {
    return this.httpClient.get<Book[]>(
      baseUrl + 'search',
      {
        params: {
          category: category,
          query: searchQuery
        }
      }).pipe(

      );
  }
}
