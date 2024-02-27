import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tour } from '../Interfaces/addTour.interface';
import { users } from '../../../Xplora-Tours-Backend/src/Interfaces/user';
import { updatedUserDetails } from '../Interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTours(){

    interface AllTours {

      tours :[{ destination:string
        category:string
        start_date:string
        end_date:string
        price:number}],

      errors:[]

    }

    return this.http.get<AllTours>('http://localhost:4500/tours',) 

  
  }

  deleteTour(id:string){
    return this.http.delete<{message:string, error:string}>(`http://localhost:4500/tours/delete/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    })
  }

  getOneTour(id:string){
    return this.http.get<{tour:Tour[], message:string, error:string}>(`http://localhost:4500/tours/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    })
  }


  updateTour(id:string, details:Tour){
    return this.http.put<{message:string, error:string}>(`http://localhost:4500/tours/update/${id}`, details,{
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    })
  }





  getUsers(){

    interface users {

      users :[{     
        first_name:string
        last_name:string
        email:string
      }],

      errors:[]

    }

    return this.http.get<users>('http://localhost:4500/users',) 

  
  }

  token = localStorage.getItem('token') as string


  deleteUser(id:string){
    return this.http.delete<{message:string, error:string}>(`http://localhost:4500/users/delete/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  getOneUserDetails(id:string){
    return this.http.get<{user:users[]}>(`http://localhost:4500/users/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }


  updateUserDetails(id:string, details:updatedUserDetails){
    return this.http.put<{message:string, error:string}>(`http://localhost:4500/users/update/${id}`, details,{
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }
}



