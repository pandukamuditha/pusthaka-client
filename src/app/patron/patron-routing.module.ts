import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatronComponent } from './patron.component';
import { BookCatalogComponent } from '../shared/book-catalog/book-catalog.component';

const routes: Routes = [{
  path: 'patron',
  component: PatronComponent,
  children: [
    {
      path: 'catalog',
      component: BookCatalogComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatronRoutingModule { }
