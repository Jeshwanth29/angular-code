import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MdService {

  constructor(private http:HttpClient,private _httpService:MdService) { }

  updateMD(employee_id,md){
  	return this.http.put('http://localhost:8082/put/MD/B_Employee/'+employee_id,md);
  }
}
