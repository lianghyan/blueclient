import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router'; 
import { Location } from '@angular/common';
import  {LoginService} from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	userName;	 
	constructor(private router: Router,private location: Location, private loginService: LoginService) { }

  ngOnInit() {
	  this.userName=window.localStorage.getItem('userName');
	  this.loginService.role=window.localStorage.getItem('role');
	  //alert(this.role);
	  //alert(this.userName);
  }
	logout(){
 	 this.removeUser();
	 this.loginService.role="undefined";
	 this.router.navigateByUrl("signin");  
	}
	removeUser(){
		window.localStorage.removeItem('role');
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('userName');
 }
}
