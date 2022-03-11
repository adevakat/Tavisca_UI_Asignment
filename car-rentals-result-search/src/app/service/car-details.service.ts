import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {

  constructor(private http: HttpClient) { }

  public getCarData(): Observable<any> {
    return this.http.get(environment.apiUrl + 'carData')
  }
}
