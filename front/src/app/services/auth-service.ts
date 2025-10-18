import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = `${environment.apiUrl}/public/login`;

  constructor(private http: HttpClient){}

  login(username: string, password: string){}
}
