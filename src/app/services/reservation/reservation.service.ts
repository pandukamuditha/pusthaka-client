import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Copy } from '../../models/copy';
import { retry } from 'rxjs/operators';
import { Reservation } from '../../models/reservation';

const baseUrl = 'http://localhost:3000/api/reservations/';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) { }

  reserveBook(copy: Copy) {
    return this.httpClient.post(baseUrl, copy).pipe(
      retry(3)
    );
  }

  getUserReservations(userId: string) {
    return this.httpClient.get<Reservation[]>(baseUrl + 'user/' + userId).
    pipe(
      retry(3)
    );
  }
}
