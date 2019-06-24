import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenAlertService } from '../service/token-alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public selectors: string = 'home';

  constructor(private http: HttpClient,
    private tokenAlertService: TokenAlertService) {

  }
  ngOnInit() {

  }
  selector(data) {
    this.selectors = data;
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
