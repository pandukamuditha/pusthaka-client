import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservation';
import { Lending } from '../../models/lending';
import { ReservationService } from '../../services/reservation/reservation.service';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { LendingsComponent } from '../../admin/lendings/lendings.component';
import { LendingService } from '../../services/lending/lending.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  displayedLendingTableColumns = ['title', 'dueDate', 'fine'];
  displayedReservationTableColumns = ['book', 'date', 'actions'];

  burrowedBooks: Lending[];
  reservations: Reservation[];
  userInfo: any;

  constructor(
    private reservationService: ReservationService,
    private lendingService: LendingService,
    private authService: AuthService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.userInfo = this.authService.getUserInfo();
    this.getValidReservations();
    this.getAllBurrowedBooks();
  }

  getValidReservations() {
    this.reservationService.getValidUserReservations(this.userInfo.userId).subscribe(
      reservations => { this.reservations = reservations; }
    );
  }

  getAllBurrowedBooks() {
    this.lendingService.getAllBooksByUser(this.userInfo.userId).subscribe(
      lendings => { this.burrowedBooks = lendings as Lending[]; }
    );
  }

  deleteReservation(reservationId: string) {
    this.reservationService.deleteReservation(reservationId).subscribe(
      (res) => {
        this.snackBar.open('Reservation Deleted', 'Dismiss');
      },
      () => { },
      () => {
        this.getValidReservations();
      }
    );
  }

  calculateDue(issuedDate: string) {
    const date = new Date(issuedDate);
    return (date.getTime() + 604800000);
  }

  calculateFine(issuedDate: string) {
    const date = new Date(issuedDate);
    if ((Date.now() - (date.getTime() + 604800000) > 0)) {
      return Math.round(((Date.now() - (date.getTime() + 604800000)) / 86400000) * 20);
    } else {
      return 0;
    }
  }

}
