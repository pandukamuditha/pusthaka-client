import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';
import { Book } from '../../models/book';
import { Copy } from '../../models/copy';

const baseUrl = 'http://localhost:3000/api/books/';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getBook(id: string) {
    return this.httpClient.get<any>(baseUrl + id).pipe(
      retry(3),
      map((res) => {
        return {
          book: res['book'] as Book,
          copies: res['copies'] as Copy[]
        };
      })
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
        retry(5)
      );
  }

  addCopy(book: Book) {
    return this.httpClient.post<Copy>(baseUrl + 'copy', { book: book._id }).pipe(
      retry(3)
    );
  }

  deleteCopy(copy: Copy) {
    return this.httpClient.delete<Copy>(baseUrl + 'copy/' + copy._id).pipe(
      retry(3)
    );
  }
}
