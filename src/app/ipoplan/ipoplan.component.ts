import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router'; 
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';
import { fsdconfig } from '../config';
@Component({
  selector: 'app-ipoplan',
  templateUrl: './ipoplan.component.html',
  styleUrls: ['./ipoplan.component.css']
})
export class IpoplanComponent implements OnInit {
	ipoForm:FormGroup ;
	compNameList;
  constructor(private http: HttpClient, private router: Router,   
			private activatedRoute: ActivatedRoute, private formBuilder:FormBuilder,
			 private location: Location) {

  }

  ngOnInit() {
	this.findCompanyNames();

	var companyCd="undefined";
	var op="undefined";
  	this.activatedRoute.queryParams.subscribe((param:any )=> {
		console.log(param.companyCd, 'second');
		//alert(JSON.stringify(param));		
		op=param.op;
		if(op=='update'){
			companyCd=param.companyCd;
			this.findIpoPlanByCd(companyCd);
		}
		if(op=='add'){
			this.initIpoPlan('');
		}
	});
	
  }
     initIpoPlan(companycd){
		// alert(companycd);
		this.ipoForm= this.formBuilder.group({
      id:-1,
	  companyCd: companycd,
 	  exchCd: '',
	  exchName: '',
	  pricePerShare: 0,
	  totalShares: 0,
	  openDate: '',
	  remarks:'No remark',
    });
	 }
	 
     findIpoPlanByCd(companyCd){
 	   
	   const httpOptions = {
		  headers: new HttpHeaders({
			'Content-Type':  'application/json;charset=UTF-8',
 			'Authorization': 'my-auth-token',
			'responseType': 'application/json;charset=UTF-8'
		  }),
			params: new HttpParams().append('companyCd', companyCd)
		};	  
	   	var url=fsdconfig.fsdipo+"/ipo";
		this.http.post<any>(url, "", httpOptions).subscribe(
         (val) => {
			 if(val.status==-1){
				 alert(val.retMsg);
				 this.initIpoPlan(companyCd);
			 }else{
				// alert(val.dataList);
				  var ipoPlan=val.data;
				  if(val.data!=null){
					this.setIpoPlanForm(ipoPlan);
				  }

 			}
		}
	);

   }
   
   setIpoPlanForm(ipoPlan){
	  this.ipoForm= this.formBuilder.group({
		id: ipoPlan.id,
      companyCd: ipoPlan.companyCd,
	  exchCd: ipoPlan.exchCd,
	  exchName: ipoPlan.exchName,
	  pricePerShare: ipoPlan.pricePerShare,
	  totalShares: ipoPlan.totalShares,
	  openDate: ipoPlan.openDate,
	  remarks: ipoPlan.remarks,
    });
		//alert(this.ipoForm.value.exchCd);
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
	   	var url=fsdconfig.fsdipo+"/add";
		this.http.post<any>(url, data, httpOptions).subscribe(
         (val) => {
			 if(val.status==-1){
				 alert(val.retMsg);
			 }else{
				// alert(val.dataList);
				  var ipoPlan=val.data;
				 alert(val.retMsg);
				 this.setIpoPlanForm(val.data);

 			}
		}
	);

  }
  
  goBack(){
	  this.location.back();
  }
  
	findCompanyNames(){
	 	  const httpOptions = {
		  headers: new HttpHeaders({
			'Content-Type':  'application/json;charset=UTF-8',
 			'Authorization': 'my-auth-token',
			'responseType': 'application/json;charset=UTF-8'
		  }),
			//params: new HttpParams().append('searchStr', data)
		};	  
	   	var url=fsdconfig.fsdcompany+"/companycdnames";
		this.http.post<any>(url, "", httpOptions).subscribe(
         (val) => {
			 if(val.status==-1){
				 alert(val.retMsg);
			 }else{
				
				 if(val.dataList.length>0){
					 this.compNameList=val.dataList;
					//alert("return dataList: "+val.dataList);					 
			    }
 			}
		}
	);
   }
}
