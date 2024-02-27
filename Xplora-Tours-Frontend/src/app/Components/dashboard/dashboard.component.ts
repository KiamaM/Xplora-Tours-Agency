import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { ViewToursComponent } from '../view-tours/view-tours.component';
import { ApiService } from '../../../Services/api.service';
import { users } from '../../../../../Xplora-Tours-Backend/src/Interfaces/user';
import { ViewUsersComponent } from '../view-users/view-users.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavBarComponent, CommonModule, ViewToursComponent, ViewUsersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isDashboard:boolean = true
  isUsers:boolean = false
  isTours:boolean = false

  users:any[]=[]


  constructor(private api: ApiService){

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

  fetchUsers(){
    this.isUsers = true
    this.isDashboard = false
    this.isTours = false


    this.api.getUsers().subscribe(res=>{
      console.log(res);

      console.log(res.users);

      // this.toursAll = res.message
      

      this.users = res.users
      // console.log(this.toursAll);
      
      
    })
  }
}
