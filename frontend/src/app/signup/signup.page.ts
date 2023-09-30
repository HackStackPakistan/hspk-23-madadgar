import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  name: string = '';
  email: string = '';
  password: string = '';
  phoneNumber: string = '';
  isNgo: boolean = false;
  showPassword: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  async signUp() {
    const res = await this.authService.signUp({
      name: this.name,
      email: this.email,
      password: this.password,
      isNGO: this.isNgo
    });

    console.log(res);
    this.router.navigate(['registration-success']);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
