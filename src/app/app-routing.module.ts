import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./public/pages/login/login.component";
import {SigninComponent} from "./public/pages/signin/signin.component";
import {RegisterUserComponent} from "./public/pages/register/register-user/register-user.component";
import {RegisterCompanyComponent} from "./public/pages/register/register-company/register-company.component";
import {HomeComponent} from "./public/pages/home/home.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'sign-in', component : SigninComponent  },
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'register-company', component: RegisterCompanyComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
