import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {
  isLogin() {
    return localStorage.getItem('token');
  }
}
