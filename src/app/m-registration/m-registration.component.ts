import { Component, OnInit } from '@angular/core';
import { Manager } from './managerreg';
import { Router } from '@angular/router';
import { MregserviceService } from './mregservice.service';
@Component({
  selector: 'app-m-registration',
  templateUrl: './m-registration.component.html',
  styleUrls: ['./m-registration.component.css']
})
export class MRegistrationComponent implements OnInit {
employee_id:String;
employee_name:String;
dob:Date;
contact:number;
mail:String;;
username:String;;
password:String;
employee_role:String;;
branch_id:String;

manager:Manager;
submitted=false;

      model=new Manager('','',new Date(),0,'','','','','');
  constructor(private router:Router, private _httpService:MregserviceService) { 
  (function() {
  'use strict';
  window.addEventListener('load', function() {

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
}


  ngOnInit() {
  }

  createManager(){
  	this.submitted=true;
  	this.save();
  }

  save(){
  	this.employee_id=this.model.employee_id;
  	this.employee_name=this.model.employee_name;
  	this.dob=this.model.dob;
  	this.contact=this.model.contact;
  	this.mail=this.model.mail;
  	this.username=this.model.username;
  	this.password=this.model.password;
  	this.employee_role=this.model.employee_role;
  	this.branch_id=this.model.branch_id;
  	this.manager=new Manager(this.employee_id,this.employee_name,this.dob,this.contact,this.mail,this.username,this.password,this.employee_role,this.branch_id);
  	console.log("from server"+this.manager);
  	this._httpService.createManager(this.manager)
  	.subscribe(data=> console.log(data),error=>console.log(error));
    alert("registration successfull");

    this.router.navigate(['/manager']);
  }

}
