import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisteredComponent } from './registered/registered.component';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { httpInterceptorProviders } from './service';
import { TokenServiceService } from './service/token-service.service';
import { TokenAlertService } from './service/token-alert.service';
import { AuthService } from './auth.service';
import { SwiperBodyComponent } from './home/swiper-body/swiper-body.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TimerComponent } from './home/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisteredComponent,
    SwiperBodyComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    TokenServiceService,
    TokenAlertService,
    AuthService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
