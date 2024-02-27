import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  token = localStorage.getItem('token') as string

  constructor(private http:HttpClient) { }

  bookTour(user_id:string, tour_id:string){
    return this.http.post<{message:string, error:string}>(`http://localhost:4500/book/`,{user_id, tour_id}, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token,
      })
    })

  }
  readToken(token:string){
    return this.http.get<{info:{user_id: string,first_name:string, last_name:string,email:string}}>('http://localhost:4500/auth/checkdetails', {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token':token
      })
    })
  }

  getAllUserBookings(user_id:string){
 

    return this.http.get<any>(`http://localhost:4500/book/${user_id}`,{
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    }) 
  
  }
}
