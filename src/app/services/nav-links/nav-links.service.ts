import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

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
      url: 'catalog'
    },
    {
      title: 'Users',
      icon: 'supervised_user_circle',
      url: 'users'
    },
    {
      title: 'Lendings',
      icon: 'send',
      url: 'lendings'
    },
    {
      title: 'Reservations',
      icon: 'lock',
      url: 'reservations'
    },
    {
      title: 'Requests',
      icon: 'plus_one',
      url: 'requests'
    }
  ];

  constructor(
    private authService: AuthService
  ) { }

  public getLinks() {
    switch (this.authService.getUserInfo().userRole) {
      case 'patron':
        return this.Userlinks;
      case 'admin':
        return this.adminLinks;
    }
  }
}

interface Link {
  title: string;
  icon: string;
  url: string;
}
