import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle } from '@angular/material';

@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html'
})
export class LendingComponent {
  constructor(
    public dialogRef: MatDialogRef<LendingComponent>,
    @Inject(MAT_DIALOG_DATA) public userId: string) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
