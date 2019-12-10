import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router'; 
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

import { fsdconfig } from '../config';
import  {LoginService} from '../service/login.service';
import { bfresponse } from './bfresponse';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
	loginForm: FormGroup;
	fsdconfig=fsdconfig;

  constructor(private http: HttpClient, private router: Router, private formBuilder:FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
	  this.loginForm = this.formBuilder.group({
		  userName: '',
		  password: ''
        });
		this.removeUser();
  }
 onClickSubmit(data) {
 	  
	  const httpOptions = {
	  headers: new HttpHeaders({
		'Content-Type':  'application/json;charset=UTF-8',
		'responseType': 'plain/text'
	  }),
		//params: new HttpParams().append('username', userName).append('password', password)
		//params:new HttpParams({"username": "usky", "password": "111111" });
	};	  
	var url=fsdconfig.fsduser+"/login";
	 
	this.http.post<any>("http://127.0.0.1:8762/user/login", data, httpOptions).subscribe(
         (val) => {
			 if(val.status==-1){
				 alert(val.retMsg);
			 }else{
				//alert(val.role);
				this.loginService.role= val.role;
				this.loginService.userName= val.userName;
				window.localStorage.setItem('role', val.role);
				window.localStorage.setItem('token', val.token);
				window.localStorage.setItem('userName', data.userName);
				//alert(val.retMsg);
				this.router.navigateByUrl("companylist");  
			}
		}
	);
 }
 
 removeUser(){
	window.localStorage.removeItem('role');
	window.localStorage.removeItem('token');
	window.localStorage.removeItem('userName');

 }
}
