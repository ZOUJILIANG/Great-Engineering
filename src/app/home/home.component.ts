import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  withCredentials: true
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  public data;


  constructor(private http: HttpClient) {

  }
  ngOnInit() {

  }

  nodeTest() {
    const asd = this.http.get('http://localhost:8080/getdata');
    asd.subscribe(value => {
      if (this.data) {
        this.data = '';
      } else {
        console.log(value);
        this.data = value;
      }
    });
  }

  nodeTest2() {
    const asd = this.http.get('http://localhost:8080/wiki/about');
    asd.subscribe(value => {
      console.log(value);
    });
  }

  nodeTest3() {
    this.http.post('http://localhost:8080/wiki/saveData', {name: '诸葛四郎', password: 'helloPassWord'}).subscribe(
      (value) => {
        console.log(value);
      }, (error1) => {
        console.log(error1);
      }
    );
  }
}
