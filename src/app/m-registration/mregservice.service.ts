import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Manager } from './managerreg';

@Injectable({
  providedIn: 'root'
})
export class MregserviceService {

  constructor(private http:HttpClient) { }

  createManager(manager:object):Observable<Object>{
  	console.log("service"+manager);
  	return this.http.post<Manager>('http://localhost:8082/post/B_Employee',manager)
  }
}
