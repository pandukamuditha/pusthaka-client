import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatronRoutingModule } from './patron-routing.module';
import { PatronComponent } from './patron.component';
import { SharedModule } from '../shared/shared.module';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PatronRoutingModule
  ],
  declarations: [
    PatronComponent,
    BookDetailsComponent
  ],
  exports: [
    PatronRoutingModule
  ]
})
export class PatronModule { }
