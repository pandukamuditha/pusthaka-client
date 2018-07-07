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
  MatSelectModule,
  MatTableModule,
  MatSnackBarModule, 
  MatDialogModule} from '@angular/material';

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
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule
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
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialComponentsModule { }
