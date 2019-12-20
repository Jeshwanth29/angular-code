import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerserviceService {

  constructor(private http:HttpClient,private _httpService:ManagerserviceService) { }
   
   getManagerDetails(){
  	return this.http.get
  	('http://localhost:8082/B_Employee');
  }

  delManager(employee_id){
  	console.log("inside service"+employee_id);
  	return this.http.delete('http://localhost:8082/delete/B_Employee/'+employee_id,employee_id);
    }


}
