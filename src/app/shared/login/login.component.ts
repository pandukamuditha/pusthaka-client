import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User('', '');
  loginError = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.user).subscribe(
      (res) => {
        console.log(res);
        if (res.userRole === 'admin') {
          this.router.navigateByUrl('admin');
        } else if (res.userRole === 'patron') {
          console.log('Patron');
          this.router.navigateByUrl('patron');
        }
      },
      (error) => {
        this.loginError = error;
      }
    );
  }

  hideLoginError() {
    this.loginError = '';
  }

}
