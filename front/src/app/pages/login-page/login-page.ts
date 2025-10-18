import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      const {username, password} = this.loginForm.value;

      this.authService.login(username, password).subscribe({
        next: (data) => {
          alert('El usuario ingreso correctamente');
          console.log('Login exitoso', data);
        },
        error: (e) => {console.log('Error: ', e)}
      })
    }
  }
}
