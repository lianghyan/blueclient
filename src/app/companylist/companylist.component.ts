import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router'; 
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

import { companyList } from '../model/companyList';
import { fsdconfig } from '../config';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {
	companyList=companyList;
	searchForm;
	compNameList;
  constructor(private http: HttpClient, private router: Router,   
			private activatedRoute: ActivatedRoute, private formBuilder:FormBuilder) {
		this.searchForm= this.formBuilder.group({
			companyName:'IBM'
		});
			 }
  ngOnInit() {
 		//document.getElementById("companyName").onkeyup= filterData;
	   document.getElementById("companyName").onmouseup = function(){
		   document.getElementById("dataList").style.display="none";
	   };
	   //this.compNameList=['IBM','NEU','Acc','HP'];
	  //this.findAllCompany();
  }
	
	filterData(){
		 
 		//var input=document.getElementById("companyName").value;

		//this.compNameList=["International Business Machine Company","Institute of Business Forecasting"];

		var dataListDiv=document.getElementById("dataList");
		//this.searchForm.value.companyName=input;
		if(this.searchForm.value.companyName.length>1){
			
			this.findCompanyByName(this.searchForm.value);
		 //this.testUL();
			dataListDiv.style.display="block";
		}else{
			dataListDiv.style.display="none";

		}
		//alert();
	}
   
		
   setLiToInput(eve){
	   		//alert("srcElement-"+eve.srcElement.innerHTML+"-");
	   //document.getElementById("companyName").value=eve.srcElement.innerHTML;
		this.searchForm.value.companyName=eve.srcElement.innerHTML;
   }
   findCompanyByName(data){
	   
	   //document.getElementById("dataList").style.display="none";
	   //alert(this.searchForm.value.companyName +"--"+data.companyName);
	   //this.selCompList.push("added neu");
	   
	   
	   const httpOptions = {
		  headers: new HttpHeaders({
			'Content-Type':  'application/json;charset=UTF-8',
 			'Authorization': 'my-auth-token',
			'responseType': 'application/json;charset=UTF-8'
		  }),
			params: new HttpParams().append('searchStr', data.companyName)
		};	  
	   	var url=fsdconfig.fsdcompany+"/matchcompany";
		this.http.post<any>(url, "", httpOptions).subscribe(
         (val) => {
			 if(val.status==-1){
				 alert(val.retMsg);
			 }else{
				// alert(val.dataList);
				 this.companyList=val.dataList;

 			}
		}
	);

   }
   
   testUL(){
	   alert("testUL");
   }
   
   findCompanyNames(data){
	 	  const httpOptions = {
		  headers: new HttpHeaders({
			'Content-Type':  'application/json;charset=UTF-8',
 			'Authorization': 'my-auth-token',
			'responseType': 'application/json;charset=UTF-8'
		  }),
			params: new HttpParams().append('searchStr', data)
		};	  
	   	var url=fsdconfig.fsdcompany+"/searchcompanyname";
		this.http.post<any>(url, "", httpOptions).subscribe(
         (val) => {
			 if(val.status==-1){
				 alert(val.retMsg);
			 }else{
				 //alert("return dataList: "+val.dataList);
				 if(val.dataList.length>0){
					 this.compNameList=val.dataList;
					 this.createUL();
				  document.getElementById("dataList").style.display="block";
			    }
 			}
		}
	);
   }
   
   	createUL(){
			var ulObj = document.getElementById('ulList');
			while(ulObj.hasChildNodes())  
			{
				ulObj.removeChild(ulObj.firstChild);
			}
				//alert(2);
			for(var index=0; index<this.compNameList.length; index++){
				 
					var liText=this.compNameList[index];
					var li=document.createElement("li");
					li.className="custom-option-li";
					li.style.lineHeight= "30px"; 
					li.style.cursor ="hand";
					li.onmouseover =function(){
					 
						this.style.backgroundColor ="#F2C051";
						this.style.cursor ="pointer";
					};
					li.onclick =function(){
						var txtName=this.getElementsByTagName("span")[0];
						//alert(txtName.innerHTML);
					};
					li.onmouseout=function(){
						this.style.backgroundColor ="transparent";
						
					};
					li.innerHTML="<span style='cursor:pointer'>"+liText+"</span>";
					//var text=document.createTextNode(liText); 
					//li.appendChild(text); 
					//alert(li.innerHTML);
					ulObj.appendChild(li); 
					//alert(ulObj);
				} 
	}
		
}
