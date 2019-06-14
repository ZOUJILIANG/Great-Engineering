import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenAlertService } from '../service/token-alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  public data;
  constructor(private http: HttpClient,
    private tokenAlertService: TokenAlertService) {

  }
  ngOnInit() {

  }

  nodeTest() {

    const asd = this.http.get('http://localhost:8080/wiki/getHomeContent');
    asd.subscribe(value => {
      console.log(value);
    }, error1 => {
    // console.log(error1);
      this.tokenAlertService.alertToken();
    });
  }
}
