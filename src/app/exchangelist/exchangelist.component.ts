import { Component, OnInit } from '@angular/core';

import { exchangeList } from '../model/exchangeList';

exchangeList
@Component({
  selector: 'app-exchangelist',
  templateUrl: './exchangelist.component.html',
  styleUrls: ['./exchangelist.component.css']
})
export class ExchangelistComponent implements OnInit {
	exchangeList=exchangeList;
  constructor() { }

  ngOnInit() {
  }

}
