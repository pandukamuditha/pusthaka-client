import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books/books.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.css']
})
export class BookCatalogComponent implements OnInit {
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  book: Book;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBook().subscribe((data: Book) => {
      this.book = data;
    });
  }

}
