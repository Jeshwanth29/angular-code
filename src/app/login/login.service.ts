import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private _httpService:LoginService) { }


  getAdminDetails(user,password){
  	//this.user=user;
  	//this.password=password
  	//console.log(username);
  	//console.log(password);
  	return this.http.get
  	('http://localhost:8082/B_MD/'+user+'/'+password);

  }
}
