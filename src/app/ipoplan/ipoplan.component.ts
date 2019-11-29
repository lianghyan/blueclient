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
  constructor(private http: HttpClient, private router: Router,   
			private activatedRoute: ActivatedRoute, private formBuilder:FormBuilder,
			 private location: Location) {
	this.ipoForm= this.formBuilder.group({
      id:-1,
	  companyCd: '',
	  companyName: '',
 	  exchCd: '',
	  exchName: '',
	  pricePerShare: 0,
	  totalShares: 0,
	  openDate: '',
	  remarks:'0',
    });
  }

  ngOnInit() {

	var companyCd="undefined";
	var companyName="undefined";
	var op="undefined";
  	this.activatedRoute.queryParams.subscribe((param:any )=> {
		console.log(param.companyCd, 'second');
		//alert(JSON.stringify(param));
		companyCd=param.companyCd;
		companyName=param.companyName;
		op=param.op;
		if(op=='update'){
			this.findIpoPlanByCd(companyCd, companyName);
		}
	});
  }
  
     findIpoPlanByCd(companyCd, companyName){
 	   
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
			 }else{
				// alert(val.dataList);
				  var ipoPlan=val.data;
				  if(val.data!=null){
					this.setIpoPlanForm(ipoPlan, companyName);
				  }

 			}
		}
	);

   }
   
   setIpoPlanForm(ipoPlan, companyName){
	  this.ipoForm= this.formBuilder.group({
		id: ipoPlan.id,
      companyCd: ipoPlan.companyCd,
	  companyName: companyName,
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
				 //alert(val.data);

 			}
		}
	);

  }
  
  goBack(){
	  this.location.back();
  }

}
