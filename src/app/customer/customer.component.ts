import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { CustomerserviceService } from './customerservice.service';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { AgGridAngular } from '@ag-grid-community/angular';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
	title = 'grid-example-app';
 custArray: Array<Customer> = new Array();
  getData:any[];
  public gridApi;
  public gridColumnApi;
  //private columnDefs;
  public rowData;
  public tempId = 0;
  public account_no=0;
  public btnVal = "Submit";
  style = {
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        marginTop: '20px'
    };
          modules = AllCommunityModules; 

 
      model= new Customer(0,'',new Date(),0,'','','',0,'','','',new Date(),0,'');  
      
     columnDefs = [
      { headerName:"cust_id",field:"cust_id",sortable:true,filter:true},
      { headerName:"name",field:"name",sortable:true,filter:true},
      { headerName:"dob",field:"dob",sortable:true,filter:true},
      { headerName:"contact",field:"contact",sortable:true,filter:true},
      { headerName:"address",field:"address",sortable:true,filter:true},
      { headerName:"aadhar_card",field:"aadhar_card",sortable:true,filter:true},
      { headerName:"pan_card",field:"pan_card",sortable:true,filter:true},
      { headerName:"branch_id",field:"branch_id",sortable:true,filter:true},
      { headerName:"customer_Acc_no",field:"customer_Acc_no",sortable:true,filter:true},
      { headerName:"balance",field:"balance",sortable:true,filter:true},
      { headerName:"account_id",field:"account_id",sortable:true,filter:true},
      ];

  constructor(private router:Router,private http:HttpClient,private _httpService:CustomerserviceService) { }

  ngOnInit() {
            this.rowData = this.http.get('http://localhost:8082/B_Customer');
  }

  onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }

    /*fillLarge() {
        this.setWidthAndHeight('100%', '100%');
    }*/

    fillMedium() {
        this.setWidthAndHeight('60%', '60%');
    }

    fillExact() {
        this.setWidthAndHeight('400px', '400px');
    }

    setWidthAndHeight(width, height) {
        this.style = {
            marginTop: '20px',
            width: width,
            boxSizing: 'border-box',
            height: height
        };
      }
}