import { Component, OnInit } from '@angular/core';
import { MdService } from './md.service';
import { MD } from './md';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mdupdate',
  templateUrl: './mdupdate.component.html',
  styleUrls: ['./mdupdate.component.css']
})
export class MdupdateComponent implements OnInit {

	openform=false;
	employee_id:string;
	employee_name:string;
	dob:Date;
	contact:number;
	mail:string;
	username:string;
	password:string;
	employee_role:string;

	md:MD;


      model=new MD('','',new Date(),0,'','','','');

  constructor(private router:Router, private _httpService:MdService,private http: HttpClient) { }

  ngOnInit() {
  }

  list(){
  	var employee_id=this.model.employee_id;
  	alert("update initiated");
    this.openform=true;
    return this.openform;
  }

  updateMD(){
  	this.employee_id=this.model.employee_id;
  	this.employee_name=this.model.employee_name;
  	this.dob=this.model.dob;
  	this.contact=this.model.contact;
  	this.mail=this.model.mail;
  	this.username=this.model.username;
  	this.password=this.model.password;
  	this.employee_role=this.model.employee_role;
  	this.md=new MD(this.employee_id,this.employee_name,this.dob,this.contact,this.mail,this.username,this.password,this.employee_role);
  	console.log(this.md);
  	this._httpService.updateMD(this.employee_id,this.md)
  	.subscribe(data=> console.log(data),error=>console.log(error));

    alert("Success");
    
  }

}
