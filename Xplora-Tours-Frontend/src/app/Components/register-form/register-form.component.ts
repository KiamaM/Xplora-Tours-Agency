import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RegisterService } from '../../../Services/register.service';
import { AuthService } from '../../../Services/auth.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { LoginComponent } from '../login-form/login-form.component';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';



@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive, RouterOutlet, CommonModule, NavBarComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  signUpForm!:FormGroup

  constructor(private fb:FormBuilder, private registerService:RegisterService, private router:Router){
    this.signUpForm = fb.group({
      first_name:['', [Validators.required]],
      email:['', [Validators.required], [Validators.email]],
      last_name:['', [Validators.required]],
      password:['', [Validators.required]],      
    })
  }
  registerUser(){
    console.log(this.signUpForm.value); 
    
    const postedData = {...this.signUpForm.value}
    this.registerService.registerUser(postedData).subscribe(
      response =>{
        console.log(response);   
        this.router.navigate(['login'])

      },
      error=>{
        console.error(error);
      }
      
    )
  }
}
