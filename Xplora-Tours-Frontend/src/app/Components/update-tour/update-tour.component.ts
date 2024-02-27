import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Tour } from '../../../Interfaces/addTour.interface';
import { ApiService } from '../../../Services/api.service';

@Component({
  selector: 'app-update-tour',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './update-tour.component.html',
  styleUrl: './update-tour.component.css'
})
export class UpdateTourComponent {


  isTourDrawerOpen:boolean = false;
  isProfileDrawerOpen: boolean = false;
  isloggedIn:boolean = false

  id!: string
  tour!:Tour
  end_date!:Date
  start_date!:Date




  toggleTourDrawer() {
    this.isTourDrawerOpen = !this.isTourDrawerOpen;
    this.isProfileDrawerOpen = false; // Close the profile drawer
  }

  toggleProfileDrawer(){
    this.isProfileDrawerOpen = !this.isProfileDrawerOpen;
    this.isTourDrawerOpen = false; // Close the book drawer
  }

  updateTourForm!:FormGroup

  constructor(private fb:FormBuilder, private api:ApiService,private router:Router, private route:ActivatedRoute){
  
    this.getTourId()

    this.updateTourForm = this.fb.group({
      category: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
      price:['', [Validators.required]],
    })
  }
  getTourId(){
    this.route.params.subscribe(res=>{
      console.log(res['tour_id']);
      this.id = res['tour_id']

      this.getTourDetails()
    })
  }

  getTourDetails(){
    this.api.getOneTour(this.id).subscribe(res=>{
      console.log(res);
      console.log(res.tour[0]);
      this.tour = res.tour[0]
      
      console.log(res.tour[0]);
      let end_date = this.tour.end_date

      end_date = new Date().toISOString().slice(0, 10);
      console.log(end_date);

      let start_date = this.tour.end_date

      start_date = new Date().toISOString().slice(0, 10);
      console.log(start_date);
      

      this.updateTourForm.get('destination')?.setValue(this.tour.destination)
      this.updateTourForm.get('category')?.setValue(this.tour.category)
      this.updateTourForm.get('start_date')?.setValue(start_date)
      this.updateTourForm.get('end_date')?.setValue(end_date)
      this.updateTourForm.get('price')?.setValue(this.tour.price)
      
    })
  }

  updateTour(){
    this.api.updateTour(this.id, this.updateTourForm.value).subscribe(res=>{
      console.log(res);

      this.router.navigate(['dashboard'])
      
    })
  }


}

