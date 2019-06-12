import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {
  public userName: String;
  public passWord: String;
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  ngOnInit() {
  }

  registered() {
    this.http.post('http://localhost:8080/wiki/registered', {name: this.userName, password: this.passWord}).subscribe(
      (value) => {
        console.log(value);
        this.route.navigate(['login']);
      }, (error1) => {
        console.log(error1);
      }
    );
  }
}
