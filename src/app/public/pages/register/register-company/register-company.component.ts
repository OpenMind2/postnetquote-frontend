import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserAuthenticationService} from "../../../services/user-authentication.service";

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrl: './register-company.component.css'
})
export class RegisterCompanyComponent {
  name = '';
  lastName= '';
  birthdate = '';
  phone = '';
  email = '';
  password = '';
  repeat_password = '';

  constructor(private router: Router, private authService: UserAuthenticationService) {}

  goToLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (result) => {
        if (result.success) {
          console.log('Usuario autenticado', result.user);
          this.router.navigateByUrl('/home');
        } else {
          console.log('Error de autenticación');
          // Manejar error de autenticación
        }
      }
    });
    this.router.navigateByUrl('/login');
  }
  goToRegisterUser(){
    this.router.navigateByUrl('/register-user');
  }
  signOut() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    this.router.navigate(['']).then();
    console.log("Signed Out");
  }
}
