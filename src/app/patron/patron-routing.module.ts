import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatronComponent } from './patron.component';
import { BookCatalogComponent } from '../shared/book-catalog/book-catalog.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path: 'patron',
  component: PatronComponent,
  children: [
    {
      path: '',
      redirectTo: 'catalog',
      pathMatch: 'full'
    },
    {
      path: 'catalog',
      component: BookCatalogComponent,
    },
    {
      path: 'book/:id',
      component: BookDetailsComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatronRoutingModule { }
