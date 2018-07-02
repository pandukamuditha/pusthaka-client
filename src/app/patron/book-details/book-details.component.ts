import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Copy } from '../../models/copy';
import { ReservationService } from '../../services/reservation/reservation.service';
import { AuthService } from '../../services/auth/auth.service';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  selectedId: string;
  book = new Book();
  copies: Array<Copy> = [];
  availableCopy: Copy;

  reservations: Reservation[];
  canReserve: boolean;
  reserveError = '';

  constructor(
    private bookService: BookService,
    private reservationService: ReservationService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => { this.selectedId = params.id; }
    );
    this.getBook();
    this.getReservations();
  }

  getBook() {
    this.bookService.getBook(this.selectedId).subscribe(
      (data) => {
        this.book = data.book;
        this.copies = data.copies;
      }
    );
  }

  getAvailability() {
    for (const copy of this.copies) {
      if (copy.isAvailable) {
        this.availableCopy = copy;
        return true;
      }
    }
  }

  getReservations() {
    this.reservationService.getUserReservations(this.authService.getUserInfo().userId).subscribe(
      (reservations) => {
        this.reservations = reservations;
      },
      (err) => {

      },
      () => {
        this.getReservability();
      }
    );
  }

  getReservability() {
    if (this.reservations.length === 2) {
      this.reserveError = 'You have already reserved 2 books.';
      this.canReserve = false;
    }
    if (this.reservations.length > 0) {
      for (const reservation of this.reservations) {
        if (reservation.book === this.selectedId) {
          this.reserveError = 'You have reserved this book.';
          this.canReserve = false;
        }
      }
    } else {
      this.canReserve = true;
    }
  }

  reserveCopy() {
    this.reservationService.reserveBook(this.availableCopy).subscribe(
      (res) => {
        this.getReservations();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
