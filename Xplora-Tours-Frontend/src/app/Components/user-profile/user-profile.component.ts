import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ViewToursComponent } from '../view-tours/view-tours.component';
import { ApiService } from '../../../Services/api.service';
import { BookServiceService } from '../../../Services/book-service.service';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, NavBarComponent, RouterLink, RouterOutlet, RouterLinkActive, ViewToursComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  isDashboard:boolean = true
  isUsers:boolean = false
  isTours:boolean = false
  BookBtnText:string = 'Book'
  isBooked:boolean = false
  errorMsg!:string
  successMsg!:string

  visible = false
  visible2 = false

  id!: string
  toursAll:any[]=[]
  constructor(private api:ApiService, private booking:BookServiceService){
    this.fetchTours()
  }

  showDashboard(){
    this.isDashboard = true
    this.isUsers = false
    this.isTours = false
  }

  showTours(){
    this.isTours = true
    this.isDashboard = false
    this.isUsers = false
  }

  showUsers(){
    this.isTours = false
    this.isDashboard = false
    this.isUsers = true
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


}
