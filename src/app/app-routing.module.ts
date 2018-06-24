import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AppComponent } from './app.component';
import { BookCatalogComponent } from './shared/book-catalog/book-catalog.component';

const routes: Routes = [
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
    path: 'profile',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
