import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AddTourService } from '../../../Services/add-tour.service';
import { addTour } from '../../../Interfaces/addTour.interface';

@Component({
  selector: 'app-add-trip-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './add-trip-form.component.html',
  styleUrl: './add-trip-form.component.css'
})
export class AddTripFormComponent {
  isTourDrawerOpen: boolean = false;
  isProfileDrawerOpen: boolean = false;
  isloggedIn:boolean = false

  toggleTourDrawer() {
    this.isTourDrawerOpen = !this.isTourDrawerOpen;
    this.isProfileDrawerOpen = false; // Close the profile drawer
  }

  toggleProfileDrawer(){
    this.isProfileDrawerOpen = !this.isProfileDrawerOpen;
    this.isTourDrawerOpen = false; // Close the book drawer
  }

  addTourForm!:FormGroup

  constructor(private fb:FormBuilder, private AddTourService:AddTourService, private router:Router){

    this.addTourForm = fb.group({
      category:['', [Validators.required]],
      destination:['', [Validators.required]],
      start_date:['', [Validators.required]],
      end_date:['', [Validators.required]],
      price:['', [Validators.required]], 
    }
    ) 

  }

addTour(){
    console.log(this.addTourForm.value); 
    
    const postedData = {...this.addTourForm.value}
    console.log(postedData);
    
    this.AddTourService.addTour(postedData).subscribe(
      response =>{
        console.log(response);   
        this.router.navigate(['dashboard'])

      },
      error=>{
        console.error(error);
      }
      
    )

  }  
}
