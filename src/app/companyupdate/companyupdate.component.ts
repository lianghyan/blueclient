import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { company } from '../model/company';

@Component({
  selector: 'app-companyupdate',
  templateUrl: './companyupdate.component.html',
  styleUrls: ['./companyupdate.component.css']
})
export class CompanyupdateComponent implements OnInit {
	company=company;
	companyForm;
  constructor(private formBuilder: FormBuilder) { 
	  this.companyForm = this.formBuilder.group({
      companyCd: 'neu',
	  companyName: 'neusoft company',
	  ceoName: 'Liu Ji Ren',
	  director: 'LiuHong',
	  brief: 'software company',
	  exchCd: 'sz000',
	  exchName: 'shenzhen stock exchange',
	  stockCd: '000321',
	  sectorCd: 'JSJ001',
	  sectorName: 'Computer'
    });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    //this.items = this.cartService.clearCart();
    //this.checkoutForm.reset();
  }
}
