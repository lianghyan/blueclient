import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router'; 
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';
import { fsdconfig } from '../config';

@Component({
  selector: 'app-exchangeadd',
  templateUrl: './exchangeadd.component.html',
  styleUrls: ['./exchangeadd.component.css']
})
export class ExchangeaddComponent implements OnInit {
	exchForm;
 constructor(private http: HttpClient, private router: Router,   
			private activatedRoute: ActivatedRoute, private formBuilder:FormBuilder,
			private location: Location) {
}
  ngOnInit() {
	var exchCd="undefined";
	var op='undefined' ;
  	this.activatedRoute.queryParams.subscribe((param:any )=> {
		console.log(param.exchCd, 'second');
		//alert(JSON.stringify(param));
		exchCd=param.exchCd;
		op=param.op;
		if(op=='update'){
			this.findExchByCd(exchCd);
		}
		if(op=='add'){
			this.initExchForm();
		}
	});
  }
  findExchByCd(exchCd){
	 const httpOptions = {
	 headers: new HttpHeaders({
			'Content-Type':  'application/json;charset=UTF-8',
 			'Authorization': 'my-auth-token',
			'responseType': 'application/json;charset=UTF-8'
		  }),
			params: new HttpParams().append('exchCd', exchCd)
		};	  
	   	var url=fsdconfig.fsdexch+"/find";
		this.http.post<any>(url, "", httpOptions).subscribe(
         (val) => {
			 if(val.status==-1){
				 alert(val.retMsg);
			 }else{
				alert(val.data);
				  var exchange=val.data;
				  if(val.data!=null){
					this.setExchForm(exchange);
				  }

 			}
		}
	);
  }
  
   initExchForm(){
	  this.exchForm= this.formBuilder.group({
      exchCd: '',
	  exchName: '',
 	  contactAddr: '',
	  brief: '',
	  remarks: '',
    });		
  }
  setExchForm(exchange){
	  this.exchForm= this.formBuilder.group({
      exchCd: exchange.exchCd,
	  exchName: exchange.exchName,
 	  contactAddr: exchange.contactAddr,
	  brief: exchange.brief,
	  remarks: exchange.remarks,
    });		
  }
  
  onSubmit(data){
	  	  const httpOptions = {
		  headers: new HttpHeaders({
			'Content-Type':  'application/json;charset=UTF-8',
 			'Authorization': 'my-auth-token',
			'responseType': 'application/json;charset=UTF-8'
		  }),
			//params: new HttpParams().append('companyCd', companyCd)
		};	  
	   	var url=fsdconfig.fsdexch+"/add";
		this.http.post<any>(url, data, httpOptions).subscribe(
         (val) => {
			 if(val.status==-1){
				 alert(val.retMsg);
			 }else{
 				 alert(val.retMsg);
				 //alert(val.data);

 			}
		}
	);
  }
  
  goBack(){
	  this.location.back();
  } 

}
