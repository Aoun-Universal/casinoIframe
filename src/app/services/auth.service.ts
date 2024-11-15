import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('login');
  }

  login() {
    localStorage.setItem('login', 'true');
  }

  logout() {
    localStorage.removeItem('login');
  }
}
