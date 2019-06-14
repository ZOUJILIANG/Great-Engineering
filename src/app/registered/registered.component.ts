import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {
  public validPassword = /^[\\uff08\\uff09\u4e00-\u9fa5]+$/;
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  ngOnInit() {
  }

  registered(data) {
    this.http.post('http://localhost:8080/wiki/registered', {name: data.value.username, password: data.value.password}).subscribe(
      (value) => {
        localStorage.setItem('token', value['token']);
        this.route.navigate(['login']);
      }, (error1) => {
        console.log(error1);
      }
    );
  }
}
