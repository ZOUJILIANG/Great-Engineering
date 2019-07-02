import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url !== 'http://localhost:8080/wiki/setToken' && request.url !== 'http://localhost:8080/wiki/login') {
        if (!localStorage.getItem('token')) {
          return next.handle(request).pipe(tap(event => {
            // event为响应内容
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
          }));
        }
       request = request.clone({
          headers: request.headers.set('token', localStorage.getItem('token')),
          withCredentials: true
       });
    }
    return next.handle(request);
  }
}
