import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatInputModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatTabsModule,
  MatToolbarModule ,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatOptionModule,
  MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialComponentsModule { }
