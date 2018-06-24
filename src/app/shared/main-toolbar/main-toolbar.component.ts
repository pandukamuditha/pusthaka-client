import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent implements OnInit {
  public dateTime: any;

  constructor() { }

  ngOnInit() {
    this.dateTime = Date.now();
  }

}
