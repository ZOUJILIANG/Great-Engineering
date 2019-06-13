import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName: String;
  public passWord: String;
  public form: FormGroup;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type, X-XSRF-TOKEN',
      'token': localStorage.getItem('token')
    }),
    withCredentials: true
  };
  constructor(
    private route: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'first': new FormControl(),
      'second': new FormControl()
    });
  }

  registered() {
    this.route.navigate(['registered']);
  }

  login() {
    // tslint:disable-next-line:max-line-length
    const token$ = this.http.post('http://localhost:8080/wiki/setToken', {username: this.form.value.first, password: this.form.value.second});
    // tslint:disable-next-line:max-line-length
    const login$ = this.http.post('http://localhost:8080/wiki/login', {username: this.form.value.first, password: this.form.value.second}, this.httpOptions);
    // tslint:disable-next-line:no-unused-expression
    token$.subscribe(tokens => {
      localStorage.setItem('token', tokens['token']);
      login$.subscribe(
        value => {
        if (value['code'] !== 'INVALID') {
          localStorage.setItem('token', value['token']);
            this.route.navigate(['home']);
          } else {
            swal.fire('', '用户名或密码不正确', 'error');
          }
        }, error1 => {
          swal.fire('', '用户不存在', 'error');
        }
      );
    });
  }
}
