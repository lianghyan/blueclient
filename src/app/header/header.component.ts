import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	userName;
  constructor(private router: Router,) { }

  ngOnInit() {
	  this.userName=window.localStorage.getItem('userName');
	  //alert(this.userName);
  }
	logout(){
 	 this.removeUser();
	 this.router.navigateByUrl("signin");  
	}
	removeUser(){
		window.localStorage.removeItem('role');
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('userName');
 }
}
