import { Component, OnInit } from '@angular/core';

import { companyList } from '../model/companyList';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {
	companyList=companyList;
  constructor() { }

  ngOnInit() {
	  //alert(companyList[0].companyName+"llll");
  }

}
