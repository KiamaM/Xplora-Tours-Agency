import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login-form/login-form.component';
import { AddTripFormComponent } from '../add-trip-form/add-trip-form.component';
import { ViewToursComponent } from '../view-tours/view-tours.component';
import { ApiService } from '../../../Services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookServiceService } from '../../../Services/book-service.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavBarComponent,CommonModule,FormsModule, FooterComponent, RouterOutlet, RouterLink, RouterLinkActive, LoginComponent, RegisterFormComponent, AddTripFormComponent, ProfileComponent, ViewToursComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  BookBtnText:string = 'Book'
  isBooked:boolean = false

  clicked:boolean = false

  errorMsg!:string
  successMsg!:string

  visible = false
  visible2 = false

  user_id!: string


  searchQuery:any



  toursAll:any[]=[]

  constructor(private api:ApiService, private booking:BookServiceService){
    // this.fetchTours()
    this.getAllUserBookings(this.user_id)
    this.logBefore()
  }

  // fetchTours(){
  //   this.api.getTours().subscribe(res=>{
  //     console.log(res);

  //     console.log(res.tours);      

  //     this.toursAll = res.tours
  //     console.log(this.toursAll);
      
      
  //   })
  // }

  bookTour(user_id:string, tour_id:string){
    let newToken = localStorage.getItem('token') as string
    console.log(newToken);
    

    this.booking.readToken(newToken).subscribe(res=>{
      console.log(res);

        this.visible2 = false
        console.log(res.info.user_id);            
        
        this.user_id = res.info.user_id

        this.booking.bookTour(tour_id, user_id).subscribe(res=>{
          console.log(res);
                
    
          if(res.error){
            this.visible = true
            this.errorMsg = res.error
            this.isBooked= false
      
            setTimeout(() => {
              this.visible = false
            }, 3000);
          }else if(res.message){
            this.visible2 = true
            this.successMsg = res.message
            this.isBooked = true
      
            setTimeout(() => {
              this.visible2 = false
            }, 3000);    

          this.getAllUserBookings(user_id)
          }
          
        })

    })


    }

    logBefore(){
      console.log('I got to run till here');
      
    }
    

    getAllUserBookings(user_id:string){

      let newToken = localStorage.getItem('token') as string
      console.log(newToken);
      
  
      this.booking.readToken(newToken).subscribe(res=>{
        console.log(res);
  
          this.visible2 = false
          console.log(res.info.user_id);            
          
          this.user_id = res.info.user_id

      this.booking.getAllUserBookings(this.user_id).subscribe(res=>{
        console.log(res);
  
        console.log(res.tours); 
        
  
        this.toursAll = res.tours

      this.BookBtnText = 'cancel'        
        
      })          

    })
  }
}





