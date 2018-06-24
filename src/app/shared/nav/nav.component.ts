import { Component, OnInit } from '@angular/core';
import { NavLinksService } from '../../services/nav-links/nav-links.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navLinks: any;

  constructor(private navLinksService: NavLinksService) { }

  ngOnInit() {
    this.navLinks = this.navLinksService.getLinks();
  }

}
