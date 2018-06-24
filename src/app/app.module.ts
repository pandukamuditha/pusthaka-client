import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialComponentsModule } from './material-components.module';
import { MainToolbarComponent } from './shared/main-toolbar/main-toolbar.component';
import { NavComponent } from './shared/nav/nav.component';
import { BookCatalogComponent } from './shared/book-catalog/book-catalog.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { BookSearchComponent } from './shared/book-search/book-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    NavComponent,
    BookCatalogComponent,
    NotFoundComponent,
    BookSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
