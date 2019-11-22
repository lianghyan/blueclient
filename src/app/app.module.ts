import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgxEchartsModule} from 'ngx-echarts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { CompanyaddComponent } from './companyadd/companyadd.component';
import { CompanyupdateComponent } from './companyupdate/companyupdate.component';
import { ExchangelistComponent } from './exchangelist/exchangelist.component';
import { ExchangeaddComponent } from './exchangeadd/exchangeadd.component';
import { IpoplanComponent } from './ipoplan/ipoplan.component';
import { FsdchartComponent } from './fsdchart/fsdchart.component';
import { BluechartComponent } from './bluechart/bluechart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    CompanylistComponent,
	CompanyaddComponent,
    CompanyupdateComponent,
    ExchangelistComponent,
    ExchangeaddComponent,
    IpoplanComponent,
    FsdchartComponent,
    BluechartComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule,
	ReactiveFormsModule,
	NgxEchartsModule,
	RouterModule.forRoot([
	{ path: 'signin', component: SigninComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'companylist', component: CompanylistComponent },
	{ path: 'companyadd', component: CompanyaddComponent },
	{ path: 'companyupdate', component: CompanyupdateComponent },
	{ path: 'exchangelist', component: ExchangelistComponent },
	{ path: 'exchangeadd', component: ExchangeaddComponent },
	{ path: 'fsdchart', component: FsdchartComponent },	
	{ path: 'bluechart', component: BluechartComponent },	 
	{ path: 'ipoplan', component: IpoplanComponent }
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
