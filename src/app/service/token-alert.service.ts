import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenAlertService {

  constructor(private router: Router) { }

  alertToken () {
    Swal.fire({
      title: '',
      text: '登录已过期,请重新登录',
      type: 'warning',
      showCancelButton: false,
      confirmButtonText: '确认',
      cancelButtonText: 'No, keep it'
    }).then(() => {
    // 未登录，跳转到登录页面
    this.router.navigate(['/login']);
    });
  }
}
