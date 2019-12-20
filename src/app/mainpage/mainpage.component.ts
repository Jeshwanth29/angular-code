import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
 model: any = {};
  constructor(private router:Router) { }

  ngOnInit() {	
  }
 customer()
{
	this.router.navigate(['/customer']);
}
}
