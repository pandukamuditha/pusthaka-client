import { Component, OnInit } from '@angular/core';
import { PatronService } from '../../services/patron/patron.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private patronService: PatronService
  ) { }

  ngOnInit() {
    this.patronService.getProfile().subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
