import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http:HttpClient,private _httpService:CustomerserviceService) { }
   
   getCustomerDetails(){
 	return this.http.get
  	('http://localhost:8082/B_Customer');
 }
}
