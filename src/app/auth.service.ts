import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenServiceService } from './service/token-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

    constructor(public router: Router, private loginAuth: TokenServiceService) {}

    canActivate(): boolean {
      console.log(this.loginAuth.isLogin());
      if (!this.loginAuth.isLogin()) {
          this.router.navigate(['login']);
          return false;
      }
        return true;
    }
}
