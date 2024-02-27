import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Tour } from '../../../Interfaces/addTour.interface';
import { ApiService } from '../../../Services/api.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UpdateTourComponent } from '../update-tour/update-tour.component';

@Component({
  selector: 'app-view-tours',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, DatePipe, UpdateTourComponent],
  templateUrl: './view-tours.component.html',
  styleUrl: './view-tours.component.css'
})
export class ViewToursComponent {
  toursAll:any[]=[]
  id!: string
  tour!:Tour
  isDeleted!:Boolean

  errorMsg!:string
  successMsg!:string

  visible = false
  visible2 = false



  isTourDrawerOpen:boolean = false;
  isProfileDrawerOpen: boolean = false;
  isloggedIn:boolean = false


  constructor(private api: ApiService, private router:Router , private route:ActivatedRoute){
    this.fetchTours()
  }

  fetchTours(){    
    this.api.getTours().subscribe(res=>{
      console.log(res);

      console.log(res.tours);

      // this.toursAll = res.message      

      this.toursAll = res.tours
      
      // console.log(this.toursAll);
      
      
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
      this.tour = res.tour[0]   
      return this.tour   
    })
  }

  navigatetoTourForm(){
    this.router.navigate(['dashboard/update-tour'])
  }

  updateTour(){

    this.isTourDrawerOpen = true;
    this.isProfileDrawerOpen = false;
    this.isloggedIn = false


    this.navigatetoTourForm()
    
    
    // this.api.updateTour(this.id, this.tour).subscribe(res=>{
    //   console.log(res);
      
    // })
  }

  deleteTour(id:string){

    this.api.deleteTour(id).subscribe(res=>{
      console.log(res);
      if(res.error){
        this.visible = true
        this.errorMsg = res.error
        this.isDeleted= false
  
        setTimeout(() => {
          this.visible = false
        }, 3000);
      }else if(res.message){
        this.visible2 = true
        this.successMsg = res.message
        this.isDeleted = true
  
        setTimeout(() => {
          this.visible2 = false
        }, 3000);

      this.fetchTours()
      }
    })
  }




}
