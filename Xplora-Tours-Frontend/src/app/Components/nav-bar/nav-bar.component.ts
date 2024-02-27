import { Component} from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { ProfileComponent } from '../profile/profile.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login-form/login-form.component';
import { AddTripFormComponent } from '../add-trip-form/add-trip-form.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive, RouterOutlet, LandingPageComponent, LoginComponent, ProfileComponent, RegisterFormComponent, AddTripFormComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isTourDrawerOpen: boolean = false;
  isProfileDrawerOpen: boolean = false;

  currentroute = (this.route.snapshot.routeConfig?.path);
  token = localStorage.getItem('token') as string

  constructor(private router:Router, private route:ActivatedRoute){

    if(this.currentroute == 'login'){
      if(this.token){
        this.router.navigate([''])
      }
    }
  }

  isLoggedIn = localStorage.getItem('token')

  today = new Date()

  navigatetoLogin(){    
    this.router.navigate(['login'])
  }

  navigatetoRegister(){
    this.router.navigate(['register'])
  }

  logout(){
    localStorage.clear()    
  }

  toggleTourDrawer() {
    this.isTourDrawerOpen = !this.isTourDrawerOpen;
    this.isProfileDrawerOpen = false; // Close the profile drawer
  }

  toggleProfileDrawer(){
    this.isProfileDrawerOpen = !this.isProfileDrawerOpen;
    this.isTourDrawerOpen = false; // Close the book drawer
  }



  

}

