import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserAuthenticationService} from "../../../services/user-authentication.service";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  name = '';
  lastName= '';
  birthdate = '';
  phone = '';
  email = '';
  password = '';
  repeat_password = '';

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
  goToRegisterCompany(){
    this.router.navigateByUrl('/register-company');
  }
  signOut() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    this.router.navigate(['']).then();
    console.log("Signed Out");
  }
}
