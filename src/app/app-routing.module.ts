import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AppComponent } from './app.component';
import { BookCatalogComponent } from './shared/book-catalog/book-catalog.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
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
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
