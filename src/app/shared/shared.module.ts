import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { NavComponent } from './nav/nav.component';
import { BookCatalogComponent } from './book-catalog/book-catalog.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { LoginComponent } from './login/login.component';
import { MaterialComponentsModule } from '../material-components.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialComponentsModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    MainToolbarComponent,
    NavComponent,
    LoginComponent,
    BookCatalogComponent,
    BookSearchComponent
  ],
  exports: [
    MainToolbarComponent,
    NavComponent,
    LoginComponent,
    BookCatalogComponent,
    BookSearchComponent
  ]
})
export class SharedModule { }
