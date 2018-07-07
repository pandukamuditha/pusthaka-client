import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { Copy } from '../../models/copy';
import { BookService } from '../../services/book/book.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LendingComponent } from './lending/lending.component';
import { LendingService } from '../../services/lending/lending.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  selectedBookId: string;
  book = new Book();
  copies: Array<Copy> = [];
  userId: string;

  displayedColumns = ['id', 'availability', 'action-delete', 'action-lend'];

  constructor(
    private bookService: BookService,
    private lendingService: LendingService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => { this.selectedBookId = params.id; }
    );
    this.getBook();
  }

  openDialog(copy: Copy): void {
    const dialogRef = this.dialog.open(LendingComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userId = result;
      this.lendBook(this.userId, this.selectedBookId, copy._id);
      this.getBook();
    });
  }

  getBook(): void {
    this.bookService.getBook(this.selectedBookId).subscribe(
      (data) => {
        this.book = data.book;
        this.copies = data.copies;
      },
      (err) => { }
    );
  }

  addCopy(): void {
    this.bookService.addCopy(this.book).subscribe(
      () => { },
      (err) => { },
      () => { this.getBook(); }
    );
  }

  deleteCopy(copy: Copy): void {
    this.bookService.deleteCopy(copy).subscribe(
      () => { },
      (err) => { },
      () => { this.getBook(); }
    );
  }

  lendBook(userId: string, bookId: string, copyId: string) {
    this.lendingService.lendBook(userId, bookId, copyId).subscribe(
      lending => {
        this.openSnackBar('Lending successful', 'OK');
      },
      err => {
        if (err.error === 'Error. Check due books and lendings for the user.') {
          this.openSnackBar('Error! Check due books and lendings for the user!', 'OK');
        }
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action);
  }

}
