import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UsersComponent } from './users/users.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { LendingsComponent } from './lendings/lendings.component';
import { LendingComponent } from './book-details/lending/lending.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [AdminComponent, BookDetailsComponent, UsersComponent, ReservationsComponent, LendingsComponent, LendingComponent],
  exports: [AdminRoutingModule],
  entryComponents: [LendingComponent]
})
export class AdminModule { }
