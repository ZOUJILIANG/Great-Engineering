import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
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
    this.http.get('http://localhost:8080/wiki/login').subscribe(value => {
      const login_Pass = value['data'].filter((element1) => {
        return this.form.value.first === element1.name && this.form.value.second === element1.password;
      });
      console.log(login_Pass);
      if (login_Pass.length) {
        this.route.navigate(['home']);
      } else {
        swal.fire('', '用户名或密码不正确', 'error');

      }
    }, error1 => {
      console.log(error1);
    });
  }
}
