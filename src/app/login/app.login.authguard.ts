import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class LoginAuthGuard implements CanActivate {

  constructor(private router: Router) {}

    canActivate(): boolean {
      const token = localStorage.getItem('jwt-token');
       console.log(token);
       console.log(this.isTokenExpired());
      if (token && this.isTokenExpired()) {
        return true;
      }else {
        localStorage.setItem('jwt-token', '');
        localStorage.setItem('logged-user', '');
        this.router.navigate(['']);
        return false;
      }
    }

    public isTokenExpired() {
      // Check if there's an unexpired JWT
      // This searches for an item in localStorage with key == 'id_token'
      return tokenNotExpired('jwt-token');
    }
  }

