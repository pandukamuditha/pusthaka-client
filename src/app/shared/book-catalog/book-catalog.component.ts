import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { Book } from '../../models/book';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.css']
})
export class BookCatalogComponent implements OnInit {
  books: Book[];
  selectedCategory = 'all';
  error: HttpErrorResponse;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.newReleases(this.selectedCategory);
  }

  newReleases(category: string) {
    this.bookService.getNewReleases(category).subscribe(
      (books) => { this.books = books; }
    );
  }

  changeCategory($event) {
    this.selectedCategory = $event;
    this.error = null;
    this.newReleases(this.selectedCategory);
  }

  search(query) {
    this.bookService.getBooksBySearch(this.selectedCategory, query).subscribe(
      (books) => {
        this.books = books;
        this.error = null;
      },
      (err) => {
        this.error = err;
        this.books = null;
      }
    );
  }

}
