import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';
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
  selectedBookId: string;
  book = new Book();
  copies: Array<Copy> = [];

  bookReservations: Reservation[];
  userReservations: Reservation[];
  canReserve: boolean;
  isAvailable: boolean;
  reserveError = '';

  constructor(
    private bookService: BookService,
    private reservationService: ReservationService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => { this.selectedBookId = params.id; }
    );
    this.getBook();
    this.getUserReservations();
  }

  getBook() {
    this.bookService.getBook(this.selectedBookId).subscribe(
      (data) => {
        this.book = data.book;
        this.copies = data.copies;
      },
      (err) => { },
      () => {
        this.getBookReservations();
      }
    );
  }

  getBookReservations() {
    this.reservationService.getValidBookReservations(this.selectedBookId).subscribe(
      (reservations) => {
        this.bookReservations = reservations;
      },
      (err) => false,
      () => {
        this.getAvailability();
      }
    );
  }

  getAvailability() {
    let count = 0;
    for (const copy of this.copies) {
      if (copy.isAvailable) {
        count++;
      }
    }
    count -= this.bookReservations.length;
    this.isAvailable = (count > 0);
  }

  getUserReservations() {
    this.reservationService.getValidUserReservations(this.authService.getUserInfo().userId).subscribe(
      (reservations) => {
        this.userReservations = reservations;
      },
      (err) => {

      },
      () => {
        this.getReservability();
      }
    );
  }

  getReservability() {
    if (this.userReservations.length === 2) {
      this.reserveError = 'You have already reserved 2 books.';
      this.canReserve = false;
    }
    if (this.userReservations.length > 0) {
      for (const reservation of this.userReservations) {
        if (reservation.book._id === this.selectedBookId) {
          this.reserveError = 'You have reserved this book.';
          this.canReserve = false;
          break;
        }
        this.canReserve = true;
      }
    } else {
      this.canReserve = true;
    }
  }

  reserveCopy() {
    console.log(this.selectedBookId);
    this.reservationService.reserveBook(this.selectedBookId).subscribe(
      (res) => {
        this.getUserReservations();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
