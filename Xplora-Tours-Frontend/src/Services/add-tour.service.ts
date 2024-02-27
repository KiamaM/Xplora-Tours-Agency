import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { addTour } from '../Interfaces/addTour.interface';

@Injectable({
  providedIn: 'root'
})
export class AddTourService {

  constructor(private http: HttpClient) { }

  addTour(tour_details:addTour){
    return this.http.post<{message:string, error:string}>('http://localhost:4500/tours', tour_details)

  }
}
