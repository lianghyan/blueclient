import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router'; 
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

import { company } from '../model/company';

@Component({
  selector: 'app-companyupdate',
  templateUrl: './companyupdate.component.html',
  styleUrls: ['./companyupdate.component.css']
})
export class CompanyupdateComponent implements OnInit {
	company=company;
	companyForm:FormGroup ;
  constructor(private http: HttpClient, private router: Router,   private activatedRoute: ActivatedRoute, private formBuilder:FormBuilder){
	this.buildForm();
  }

  ngOnInit() {
	var pCompanyCd ='undefined' ;
	var pOp='undefined' ;
	var pCompanyName ='undefined' ;
	
	//alert("companyCd: "+ this.activatedRoute.queryParams["companyCd"]);
	
	
	
	this.activatedRoute.queryParams.subscribe((param:Params )=> {
		//alert(param["companyCd"]+"-"+param["companyName"]);
		//alert(JSON.stringify(param));
		pCompanyCd = param.companyCd;
		pOp =param.op;
		pCompanyName=param.companyName;
		//alert(pOp+"--"+param.op);
	   
 	});
  
	if(pOp=='update'){
		this.initForm(pCompanyCd);
	}
	 
	 var role=window.localStorage.getItem('role');
	 if(role=='undefined'){
 		role='user';
	  }
	  if(role=='user'){
		  this.setReadOnly();	 		  
	  }
	  
	  //this.getOptions();
   }
	
	setReadOnly(){
		document.getElementById("companyName").setAttribute("readonly","true");
		document.getElementById("ceoName").setAttribute("readonly","true");
		document.getElementById("director").setAttribute("readonly","true");
		document.getElementById("brief").setAttribute("readonly","true");
		document.getElementById("exchCd").setAttribute("disabled","true");
		document.getElementById("sectorCd").setAttribute("disabled","true");

	}
	buildForm(){
		this.companyForm = this.formBuilder.group({
		companyCd: '',
		companyName: '',
		ceoName: '',
		director: '',
		brief: '',
		exchCd: '',
		exchName: '',
		stockCd: '',
		sectorCd: '',
		sectorName: ''
    });
	}
	
	initForm(compCd){
		this.companyForm.value.companyCd=compCd;
		this.companyForm.value.companyName='neusoft company';
		this.companyForm.value.ceoName= 'Liu Ji Ren';
		this.companyForm.value.director= 'LiuHong';
		this.companyForm.value.brief='software company';
		this.companyForm.value.exchCd='NSE';
		this.companyForm.value.exchName='NSE';
		this.companyForm.value.stockCd= '000321';
		this.companyForm.value.sectorCd= '0340';
		this.companyForm.value.sectorName='Computer';
  
	}
	
   getOptions()
  {
	  var x=document.getElementById("sectorCd") as HTMLSelectElement;
	  var y="";
	  for (var i=0;i<x.length;i++){
		  var opt=x.options[i];
		  if(opt.value=='0340'){
			 // x.selectedIndex=i;
			  //alert(x.value+":"+i);
		  }
		y+=x.options[i].text;
		y+="<br />";
		}
	  document.write(y);
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    //this.items = this.cartService.clearCart();
    //this.checkoutForm.reset();
  }
}
