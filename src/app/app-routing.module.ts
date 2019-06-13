import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisteredComponent } from './registered/registered.component';
import { TokenServiceService } from './service/token-service.service';
import { AuthService } from './auth.service';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthService] },
  { path: 'login', component: LoginComponent },
  { path: 'registered', component: RegisteredComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, { useHash: true }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    TokenServiceService,
    AuthService
  ]
})
export class AppRoutingModule {}
