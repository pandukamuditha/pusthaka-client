import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent implements OnInit {
  public dateTime: any;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.dateTime = Date.now();
  }

}
