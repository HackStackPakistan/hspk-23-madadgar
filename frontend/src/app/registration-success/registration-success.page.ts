import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-success',
  templateUrl: './registration-success.page.html',
  styleUrls: ['./registration-success.page.scss'],
})
export class RegistrationSuccessPage implements OnInit {
  redirecting: boolean = false;
  countdown: number = 2;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startRedirectTimer();
  }

  startRedirectTimer() {
    this.redirecting = true;

    // simple setTimeout wasn't working, dk why
    const timerInterval = setInterval(() => {
      this.countdown--;

      if (this.countdown <= 0) {
        clearInterval(timerInterval);
        this.router.navigate(['profile']);
      }
    }, 1000);
  }
}
