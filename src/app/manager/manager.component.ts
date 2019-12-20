import { Component, OnInit } from '@angular/core';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { AgGridAngular } from '@ag-grid-community/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Manager } from './manager';
import { ManagerserviceService } from './managerservice.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
	title = 'grid-example-app';
  custArray: Array<Manager> = new Array();
  getData:any[];
  public gridApi;
  public gridColumnApi;
  //private columnDefs;
  public rowData;
  public tempId = 0;
  public account_no=0;
  public btnVal = "Submit";

        model=new Manager('','',new Date(),0,'','','','','');

        columnDefs = [
        {  headerName: "employee_id",field: "employee_id",sortable:true,filter:true,checkboxSelection:true },
        {  headerName: "employee_name",field: "employee_name",sortable:true,filter:true },
        {  headerName: "dob",field: "dob",sortable:true,filter:true },
        {  headerName: "contact",field: "contact",sortable:true,filter:true },
        {  headerName: "mail",field: "mail",sortable:true,filter:true },
       // {  headerName: "username",field: "username",sortable:true,filter:true },
       // {  headerName: "password",field: "password",sortable:true,filter:true },
        {  headerName: "employee_role",field: "employee_role",sortable:true,filter:true },
        {  headerName: "branch_id",field: "branch_id",sortable:true,filter:true },
        ];
  constructor(private router:Router,private http:HttpClient,private _httpService:ManagerserviceService) { }

  ngOnInit() {
  	        this.rowData = this.http.get('http://localhost:8082/B_Employee');

  }
      modules = AllCommunityModules;

      onGridReady(params){
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    }

      onTestGet(){
      this._httpService.getManagerDetails()
      .subscribe((res:any[])=>{
        console.log(res);
        this.getData=res;
      });
    }

    onRemoveSelected(){
      //console.log("function inside")
      var selectedData=this.gridApi.getSelectedRows();
      console.log(selectedData[0].employee_id);
      this._httpService.delManager(selectedData[0].employee_id)
      .subscribe(data=>console.log(data), error=>console.log(error));
      alert("deletion of the manager successfull");    
      //this.router.navigate(['/dashboard']);
      location.reload();
    }


}
