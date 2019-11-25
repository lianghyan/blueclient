import { Component, OnInit } from '@angular/core';
import {priceData } from '../model/stocksectorprice';

@Component({
  selector: 'app-stocksectorchart',
  templateUrl: './stocksectorchart.component.html',
  styleUrls: ['./stocksectorchart.component.css']
})
export class StocksectorchartComponent implements OnInit {
	echartsIntance;
	lineOption;
 	constructor() { }

	ngOnInit() {
		this.initLineOption();
		this.setPriceData(priceData.weekList);
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
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			type: 'line'
		}]
	};
		this.setPriceData(priceData.weekList);
	}
	

	setWeek(){
		this.setPriceData(priceData.weekList);				
		this.echartsIntance.setOption(this.lineOption);
	};
	
	setMonth(){
		this.setPriceData(priceData.monthList);
		this.echartsIntance.setOption(this.lineOption);
	}
	
	setQuarter(){
 		this.setPriceData(priceData.quarterList);
		this.echartsIntance.setOption(this.lineOption);
	}
	
	setYear(){
 		this.setPriceData(priceData.yearList);
		this.echartsIntance.setOption(this.lineOption);
	}
	
	setPriceData(priceData){
		var legData=new Array();
		var series=new Array();
		for(var i=0; i<priceData.length; i++){
			if(priceData[i].hasOwnProperty("stockCd")){
				legData[i]=priceData[i].stockCd;
							series[i]={
				name: priceData[i].stockCd,
				type: 'line',
				data: priceData[i].values
			};
			
			}else{
				legData[i]=priceData[i].sectorCd;
							series[i]={
				name: priceData[i].sectorCd,
				type: 'line',
				data: priceData[i].values
			};
			}

		}
		 
		this.lineOption.xAxis.data=priceData[0].dates;
		this.lineOption.yAxis.min=0;
		this.lineOption.yAxis.max=2000;
		this.lineOption.legend={data: legData};
		this.lineOption.series=series;		
	}
}