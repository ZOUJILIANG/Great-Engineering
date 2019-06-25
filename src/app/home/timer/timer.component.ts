import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenAlertService } from 'src/app/service/token-alert.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  public days;
  public hours;
  public minutes;
  public seconds;
  public oldTime = (new Date('2018/07/27 00:00:00')).getTime(); // 得到毫秒数
  constructor(
    private http: HttpClient,
    private tokenAlertService: TokenAlertService
  ) { }

  ngOnInit() {
    setInterval(() => {
      const newTime = new Date().getTime();
      const time: number = +newTime - (+this.oldTime);

      // tslint:disable-next-line:radix
      this.days = parseInt((time / (1000 * 60 * 60 * 24)).toString());
      // tslint:disable-next-line:radix
      this.hours = parseInt(((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString());
      // tslint:disable-next-line:radix
      this.minutes = parseInt(((time % (1000 * 60 * 60)) / (1000 * 60)).toString());
      // tslint:disable-next-line:radix
      this.seconds = parseInt(((time % (1000 * 60)) / 1000).toString());
    });
  }
  getHtml() {
    const asd = this.http.get('http://localhost:8080/wiki/getHtml');
    asd.subscribe(value => {
      console.log(value);
    }, error1 => {
    // console.log(error1);
      this.tokenAlertService.alertToken();
    });
  }

}
