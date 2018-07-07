import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BookCatalogComponent } from '../shared/book-catalog/book-catalog.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UsersComponent } from './users/users.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { LendingsComponent } from './lendings/lendings.component';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  children: [
    {
      path: '',
      redirectTo: 'catalog',
      pathMatch: 'full'
    },
    {
      path: 'catalog',
      component: BookCatalogComponent
    },
    {
      path: 'book/:id',
      component: BookDetailsComponent
    },
    {
      path: 'users',
      component: UsersComponent
    },
    {
      path: 'reservations',
      component: ReservationsComponent
    },
    {
      path: 'lendings',
      component: LendingsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
