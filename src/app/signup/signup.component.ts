import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router'; 
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

import { fsdconfig } from '../config';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	userForm: FormGroup;
	fsdconfig=fsdconfig;

  constructor(private http: HttpClient, private router: Router, private formBuilder:FormBuilder) { }

 ngOnInit() {
	  this.userForm = this.formBuilder.group({
		  userName: 'utree',
		  password: '111111',
		  role:'user',
		  email:'123@qq.com',
		  mobileNumber:'13356786800'
        });
  }

  save(){
	  var httpOptions = {
		  headers: new HttpHeaders({
			'Content-Type':  'application/json;charset=UTF-8',
			// "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
			'Authorization': 'my-auth-token',
			'responseType': 'application/json;charset=UTF-8'
		  })
			//params: new HttpParams().append('username', 'utree').append('password', '111111')
			//params:new HttpParams({"username": "usky", "password": "111111" });
		};	  
	  
	 // alert("save"+ this.userForm.value.role);
	  
	  var url=fsdconfig.serverurl+fsdconfig.fsduser+"/create";
	  this.http.post<any>(url, this.userForm.value, httpOptions).subscribe(
         (val) => {
			 alert(val.retMsg);
		}
		);
  }
  
  sendMail(){
  	  alert(fsdconfig.serverurl+fsdconfig.fsdsecurity+"/create");

  }
}
