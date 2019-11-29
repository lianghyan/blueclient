import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router'; 
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ipoplan',
  templateUrl: './ipoplan.component.html',
  styleUrls: ['./ipoplan.component.css']
})
export class IpoplanComponent implements OnInit {
	ipoForm:FormGroup ;
  constructor(private http: HttpClient, private router: Router,   
			private activatedRoute: ActivatedRoute, private formBuilder:FormBuilder,
			 private location: Location) {
	this.ipoForm= this.formBuilder.group({
      companyCd: 'neu',
	  companyName: 'neusoft company',
 	  exchCd: 'NSE',
	  exchName: 'NSE',
	  pricePerShare: 3333,
	  totalShares: 12000,
	  openDate: '2019-12-12',
	  remarks:'good luck',
    });
  }

  ngOnInit() {

  	this.activatedRoute.queryParams.subscribe((param:any )=> {
		console.log(param.companyCd, 'second');
		//alert(JSON.stringify(param));
	}
  }
  
  save(){
	  
  }
  
  goBack(){
	  this.location.back();
  }

}
