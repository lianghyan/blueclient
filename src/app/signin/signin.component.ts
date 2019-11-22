import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router'; 
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

import { fsdconfig } from '../config';

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
		  loginId: '',
		  loginPwd: ''
        });
  }
 onClickSubmit(data) {
 	  var username=data.loginId;
 	  var pass=data.loginPwd;
	  
	  const httpOptions = {
	  headers: new HttpHeaders({
		'Content-Type':  'application/json;charset=UTF-8',
		// "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
		'Authorization': 'my-auth-token',
		'responseType': 'text'
	  }),
		params: new HttpParams().append('username', 'usky').append('password', '111111')
		//params:new HttpParams({"username": "usky", "password": "111111" });
	};	  
	
	alert(fsdconfig.serverurl+fsdconfig.fsdsecurity);

 }
}
