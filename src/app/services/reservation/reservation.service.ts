import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Reservation } from '../../models/reservation';

const baseUrl = 'http://localhost:3000/api/reservations/';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) { }

  reserveBook(bookId: string) {
    return this.httpClient.post(baseUrl, { book: bookId }).pipe(
      retry(3)
    );
  }

  getAllReservations() {
    return this.httpClient.get<Reservation[]>(baseUrl + 'all').
      pipe(
        retry(3)
      );
  }

  getValidUserReservations(userId: string) {
    return this.httpClient.get<Reservation[]>(baseUrl + 'user/' + userId + '/valid').
      pipe(
        retry(3)
      );
  }

  getAllUserReservations(userId: string) {
    return this.httpClient.get<Reservation[]>(baseUrl + 'user/' + userId + '/all').
      pipe(
        retry(3)
      );
  }

  getValidBookReservations(bookId: string) {
    return this.httpClient.get<Reservation[]>(baseUrl + 'book/' + bookId + '/valid').
      pipe(
        retry(3)
      );
  }

  getAllBookReservations(bookId: string) {
    return this.httpClient.get<Reservation[]>(baseUrl + 'book/' + bookId + '/all').
      pipe(
        retry(3)
      );
  }

  deleteReservation(reservationId: string) {
    return this.httpClient.delete(baseUrl + reservationId).pipe(
      retry(3)
    );
  }
}
