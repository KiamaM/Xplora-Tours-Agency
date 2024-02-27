import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterByCategoryService {
  tours: any[] = [];

  constructor(private http: HttpClient) { }

  searchByCategory(category: string, exactMatch: boolean): Observable<any> {
    let params = new HttpParams().set('keys', category);
    if (exactMatch) {
      params = params.set('keysexactmatch', exactMatch);
    }

    return this.http.get<any>('http://localhost:4500/tours', { params });
  }

}
