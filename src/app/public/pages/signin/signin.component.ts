import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserAuthenticationService} from "../../services/user-authentication.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent {
  correo_electronico: any;
  contrasena: any;
  constructor(private router: Router, private authService: UserAuthenticationService){}
  goToRegister(){
    this.router.navigateByUrl('/register-user');
  }
  login() {
    this.authService.authenticate(this.correo_electronico, this.contrasena).subscribe({
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
  }
}
