import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  selectedId: string;
  books: Book[];

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => { this.selectedId = params.id; }
    );
    this.bookService.getBook(this.selectedId).subscribe(
      (books) => { this.books = books; }
    );
    console.log(this.books);
  }

}
