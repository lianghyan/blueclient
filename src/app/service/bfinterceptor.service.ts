import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse,
    HttpHeaderResponse,
    HttpResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BfinterceptorService implements HttpInterceptor {
  constructor() { }
  
  intercept(request: HttpRequest<any>, next: HttpHandler){
	  var token=window.localStorage.getItem('token');
	  alert(token);
	  if(token!=null && token!='undefined'){
		const clonedRequest = request.clone({
			headers: request.headers.set("fsdtoken", token)
		});
		console.log("new headers", clonedRequest.headers.keys());
		return next.handle(clonedRequest);
	  }else{
		  next.handle(request.clone());
	  }
	
	}

 
}