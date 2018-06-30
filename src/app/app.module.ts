import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialComponentsModule } from './material-components.module';
import { MainToolbarComponent } from './shared/main-toolbar/main-toolbar.component';
import { NavComponent } from './shared/nav/nav.component';
import { BookCatalogComponent } from './shared/book-catalog/book-catalog.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { BookSearchComponent } from './shared/book-search/book-search.component';
import { LoginComponent } from './shared/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './services/auth/auth-interceptor';
import { PatronModule } from './patron/patron.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    PatronModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
