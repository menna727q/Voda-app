import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:4454/forecast');
  }
  getbyID(cityId:number):Observable<any>{
    return this.http.get<any>(`http://localhost:4454/cityForecast/${cityId}`)
  }
}