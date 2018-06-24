import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavLinksService {
  Userlinks: Link[] = [
    {
      title: 'Catalog',
      icon: 'library_books',
      url: 'catalog'
    },
    {
      title: 'Profile',
      icon: 'account_circle',
      url: 'profile'
    }
  ];

  adminLinks: Link[] = [
    {
      title: 'Catalog',
      icon: 'library_books',
      url: ''
    }
  ];

  constructor() { }

  public getLinks() {
    return this.Userlinks;
  }
}

interface Link {
  title: string;
  icon: string;
  url: string;
}
