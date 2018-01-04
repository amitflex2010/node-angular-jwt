import {CanActivate} from '@angular/router';

export class LoginAuthGuard implements CanActivate {
    canActivate() {
      console.log('AlwaysAuthGuard');
      return true;
    }
  }
