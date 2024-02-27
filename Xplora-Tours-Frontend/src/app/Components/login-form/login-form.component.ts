import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../Services/auth.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { loginUserDetails } from '../../../Interfaces/user.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavBarComponent, FormsModule, RouterLink, CommonModule, RouterOutlet],
  templateUrl: '../login-form/login-form.component.html',
  styleUrl: '../login-form/login-form.component.css'
})
export class LoginComponent {

    errorMsg!:string
    successMsg!:string

    visible = false
    visible2 = false

    constructor(private router:Router, private authservice:AuthService ){}

    login(details:loginUserDetails){
      console.log(details);

      this.authservice.loginUser(details).subscribe(res=>{
        console.log(res);
        
        if(res.error){
          this.visible = true
          this.errorMsg = res.error

          setTimeout(() => {
            this.visible = false
          }, 3000);
        }else if(res.message){
          this.visible2 = true
          this.successMsg = res.message

          setTimeout(() => {
            this.visible2 = false
          }, 3000);

          localStorage.setItem('token', res.token)

          // console.log(res.token);
          
          let newToken = localStorage.getItem('token') as string
          console.log(newToken);
          

          this.authservice.readToken(newToken).subscribe(res=>{
            console.log(res);

            setTimeout(() => {
              this.visible2 = false
              console.log(res.info.email);
              
              
              if(res.info.email == 'muriithikiamad1+1@gmail.com'){

                this.router.navigate(['dashboard'])
              }else{
                this.router.navigate([''])
              }
            }, 2000);
          })

          
        }
      })



      // localStorage.setItem('loggedIn', 'true')
      
      // this.router.navigate(['admin'])
    }
}