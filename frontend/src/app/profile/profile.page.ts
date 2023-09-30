import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  reports: Object[] = [];
  userProfilePictureUrl: string = 'https://ionicframework.com/docs/img/demos/avatar.svg'; // Replace with the actual URL
  userName: string = 'John Doe'; // Replace with the user's name
  userEmail: string = 'johndoe@example.com'; // Replace with the user's email
  userPhoneNumber: string = '123-456-7890'; // Replace with the user's phone number
  isNgo: boolean = true; // Set to true for NGOs, false otherwise

  constructor() {}
}
