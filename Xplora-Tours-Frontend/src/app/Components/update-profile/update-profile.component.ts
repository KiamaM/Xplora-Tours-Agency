import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ReactiveFormsModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent {
  updateUserForm!:FormGroup
  
  updateUser(){

  }
}
