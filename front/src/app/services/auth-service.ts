import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../models/auth';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = `${environment.apiUrl}/public/login`;

  constructor(private http: HttpClient){}

  login(username: string, password: string){
    const body: LoginRequest = {username, password};

    return this.http.post<LoginResponse>(this.URL, body).pipe(
      tap(response => {
        if(response.token){
          localStorage.setItem('token', response.token)
        }
      })
    )
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(){
    
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
