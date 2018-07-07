import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ReservationService } from '../../services/reservation/reservation.service';
import { Reservation } from '../../models/reservation';
import { MatSnackBar, MatDialog } from '@angular/material';
import { LendingComponent } from '../book-details/lending/lending.component';
import { Copy } from '../../models/copy';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  displayedColumns = ['book', 'reservedBy', 'date', 'action-delete'];

  reservations: Reservation[];
  errorMsg: string;

  userId: string;

  constructor(
    private reservationService: ReservationService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getAllReservations();
  }

  getAllReservations() {
    this.reservationService.getAllReservations().subscribe(
      (res) => {
        this.reservations = res;
      },
      (err) => {
        this.errorMsg = 'Error loading data. Try again later.';
      }
    );
  }

  deleteReservation(reservationId: string) {
    console.log(reservationId);
    this.reservationService.deleteReservation(reservationId).subscribe(
      (res) => {
        this.snackBar.open('Reservation Deleted', 'Dismiss');
      }
    );
  }

}
