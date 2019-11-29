import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router'; 
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

import { companyList } from '../model/companyList';

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
			companyName:''
		}
			 }
  ngOnInit() {
 		document.getElementById("companyName").onkeyup=this.filterData;
	   document.getElementById("companyName").onmouseup = function(){
		   document.getElementById("dataList").style.display="none";
	   };
	   //this.compNameList=['IBM','NEU','Acc','HP'];
	  //this.findAllCompany();
  }
	
	filterData(){
		 
 		var input=document.getElementById("companyName").value;

		this.compNameList=["International Business Machine Company","Institute of Business Forecasting"];

		var dataListDiv=document.getElementById("dataList");
		if(input.length>=2){
				//alert(1);
			var ulObj = document.getElementById('ulList');
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
						alert(txtName.innerHTML);
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
		 
			dataListDiv.style.display="block";
		}else{
			dataListDiv.style.display="none";

		}
		//alert();
	}
   
	showLi(eve){
		//alert("srcElement-"+eve.srcElement.innerHTML+"-");
		document.getElementById("companyName").value=eve.srcElement.innerHTML;
		this.searchForm.value.companyName=eve.srcElement.innerHTML;
	//alert("target-"+eve.target.innerHTML+"-");
	//alert("innerHTML-"+this.innerHTML+"-"); 
   }
   
   searchCompany(data){
	  
	   document.getElementById("dataList").style.display="none";
	   //alert(this.searchForm.value.companyName +"--"+data.companyName);
	   //this.selCompList.push("added neu");
	   this.companyList=[{"companyCd":"IBM","companyName":"International Business Machine Company","ceoName":"John","brief":"software company","exchCd":"NSE","exchName":"National Stock Exchange","stockCd":"600116","director":null,"sectorCd":"0340","sectorName":"computer"}];
   }
   
   findAllCompany(){
	   alert('in findAllCompany');
   }
}

function   showcompany(){
	   alert('in showcompany');
   }