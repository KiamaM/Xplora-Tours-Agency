import { Component, booleanAttribute } from '@angular/core';
import { ApiService } from '../../../Services/api.service';
import { CommonModule } from '@angular/common';
import { Users } from '../../../Interfaces/user.interface';

@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.css'
})
export class ViewUsersComponent {
  users:any[]=[]

  isDashboard:boolean = false
  isUsers:boolean = true
  isTours:boolean = false

  id!: string
  user!:Users
  isDeleted!:Boolean

  errorMsg!:string
  successMsg!:string

  visible = false
  visible2 = false

  constructor(private api: ApiService){
    this.fetchUsers()
  }

  fetchUsers(){      

    this.api.getUsers().subscribe(res=>{
      console.log(res);

      console.log(res.users);

      // this.toursAll = res.message
      

      this.users = res.users
      // console.log(this.toursAll);
      
      
    })
  }

  deleteUser(id:string){

    this.api.deleteUser(id).subscribe(res=>{
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

      this.fetchUsers()
      }
    })
  }

}
