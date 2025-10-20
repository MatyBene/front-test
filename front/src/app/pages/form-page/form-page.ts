import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './form-page.html',
  styleUrl: './form-page.css'
})
export class FormPage implements OnInit{
  userForm!: FormGroup;
  userId?: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      dni: ['', [Validators.required, Validators.minLength(8)]],
      birthdate: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      phone: ['', [Validators.required, Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{8,}$/)]]
    });

    this.userId = this.route.snapshot.params['id'];
    
  }
}
