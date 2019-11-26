import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router'; 
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

import { fsdconfig } from '../config';
import { bfresponse } from './bfresponse';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
	loginForm: FormGroup;
	fsdconfig=fsdconfig;
  constructor(private http: HttpClient, private router: Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
	  this.loginForm = this.formBuilder.group({
		  userName: '',
		  password: ''
        });
  }
 onClickSubmit(data) {
 	  
	  const httpOptions = {
	  headers: new HttpHeaders({
		'Content-Type':  'application/json;charset=UTF-8',
		// "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
		'Authorization': 'my-auth-token',
		'responseType': 'text'
	  }),
		//params: new HttpParams().append('username', 'usky').append('password', '111111')
		//params:new HttpParams({"username": "usky", "password": "111111" });
	};	  
	var url=fsdconfig.serverurl+fsdconfig.fsduser+"/login";
	this.http.post<any>(url, this.loginForm.value, httpOptions).subscribe(
         (val) => {
			 if(val.status==-1){
				 alert(val.retMsg);
			 }else{
				alert(val.token);
				window.localStorage.setItem('role', val.role);
				window.localStorage.setItem('token', val.token);
				window.localStorage.setItem('userName', this.loginForm.value.userName);
				alert(val.retMsg);
				this.router.navigateByUrl("companylist");  
			}
		}
	);
 }
}
