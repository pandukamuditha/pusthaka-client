import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  @Output() categoryChanged = new EventEmitter();
  @Output() searched = new EventEmitter();
  selectedCategory = 'all';
  searchQuery = '';

  constructor() { }

  ngOnInit() {
  }

  changeCategory($event) {
    this.selectedCategory = $event;
    // this.searchQuery = '';
    this.categoryChanged.emit(this.selectedCategory);
  }

  search() {
    this.searched.emit(this.searchQuery);
  }

}
