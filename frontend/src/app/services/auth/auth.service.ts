import { Injectable } from '@angular/core';
import { API_URL } from 'src/constants';
import { User } from 'src/models';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authURL: String = `${API_URL}/auth`;
  private http: typeof CapacitorHttp = CapacitorHttp;

  constructor() {}

  signUp(user: User) {
    return this.http.post({
        url: `${this.authURL}/signup`,
        data: user,
        headers: {
          "Content-Type": "application/json"
        }
    });
  }
}
