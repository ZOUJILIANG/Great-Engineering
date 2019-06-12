import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisteredComponent } from './registered/registered.component';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
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
  ]
})
export class AppRoutingModule {}
