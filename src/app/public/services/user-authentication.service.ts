import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  private baseUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length) {
          // Usuario autenticado correctamente
          return { success: true, user: users[0] };
        } else {
          // No se encontraron usuarios, autenticación fallida
          return { success: false };
        }
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuarios`, { email, password });
  }

  logout(): void {
    // Lógica para cerrar sesión
  }
}
