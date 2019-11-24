import { Component, OnInit } from '@angular/core';

import { weekList,monthList,quaterList yearList } from '../model/stockpriceList';

@Component({
  selector: 'app-singlestockchart',
  templateUrl: './singlestockchart.component.html',
  styleUrls: ['./singlestockchart.component.css']
})
export class SinglestockchartComponent implements OnInit {
	echartsIntance;
	priceList;
	lineOption;
 	constructor() { }

	ngOnInit() {
		this.priceList=weekList;
		//alert(this.priceList.dates);
	  	//alert(this.priceList.values);
		this.initLineOption();
	}
	onChartInit(ec) {     
         this.echartsIntance = ec;
	}
	
	initLineOption(){
		this.lineOption = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		toolbox: {
			feature: {
				dataView: {show: true, readOnly: false},
				magicType: {show: true, type: ['line', 'bar','stack']},
				restore: {show: true},
				saveAsImage: {show: true}
			}
		},
	
		xAxis: {
			type: 'category',
			data: this.priceList.dates
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			data: this.priceList.values,
			type: 'line'
		}]
	};
		
	}
	
	setWeek(){
		this.priceList=weekList;
		this.lineOption.xAxis.data=this.priceList.dates;
		this.lineOption.series[0].data=this.priceList.values ;
		this.echartsIntance.setOption(this.lineOption);

	}
	 setMonth(){
		this.priceList=monthList;
		this.lineOption.xAxis.data=this.priceList.dates;
		this.lineOption.series[0].data=this.priceList.values ;
		this.echartsIntance.setOption(this.lineOption);

	}
	
	setQuater(){
		
		this.priceList=quaterList;
		this.lineOption.xAxis.data=this.priceList.dates;
		this.lineOption.series[0].data=this.priceList.values ;
		this.echartsIntance.setOption(this.lineOption);

	}
	
	setYear(){
		this.priceList=yearList;
		this.lineOption.xAxis.data=this.priceList.dates;
		this.lineOption.series[0].data=this.priceList.values ;
		this.echartsIntance.setOption(this.lineOption);
	}
}
