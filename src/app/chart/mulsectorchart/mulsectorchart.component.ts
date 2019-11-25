import { Component, OnInit } from '@angular/core';

import {priceData } from '../model/sectorpriceList';
@Component({
  selector: 'app-mulsectorchart',
  templateUrl: './mulsectorchart.component.html',
  styleUrls: ['./mulsectorchart.component.css']
})
export class MulsectorchartComponent implements OnInit {
	echartsIntance;
	lineOption;
 	constructor() { }

	ngOnInit() {
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
			legData[i]=priceData[i].sectorCd;
			series[i]={
				name: priceData[i].sectorCd,
				type: 'line',
				data: priceData[i].values
			};
		}
		 
		this.lineOption.xAxis.dseriesata=priceData[0].dates;
		this.lineOption.yAxis.min=0;
		this.lineOption.yAxis.max=2000;
		this.lineOption.legend={data: legData};
		this.lineOption.series=series;		
	}
	setWeekforTest(){
		var priceList=priceData.weekList;
 		var legend={data:['500112','600116']};
		this.lineOption.legend=legend; 		
		this.lineOption.xAxis.data=priceList[0].dates;
		this.lineOption.yAxis.min=0;
		this.lineOption.yAxis.max=2000;
		var series=[{
			name: priceList[0].sectorCd,
			type: 'line',
			data: priceList[0].values,
		},
		{
			name:priceList[1].sectorCd,
			type: 'line',
			data: priceList[1].values,
		}
		];
		this.lineOption.series=series;
		this.echartsIntance.setOption(this.lineOption);
	}
	
	setWeekforTest2(){

		var priceData=priceData.weekList;
		var legData=new Array();
		var series=new Array();
		for(var i=0; i<priceData.length; i++){
			legData[i]=priceData[i].sectorCd;
			series[i]={
				name: priceData[i].sectorCd,
				type: 'line',
				data: priceData[i].values
			};
		}
		 
		this.lineOption.xAxis.dseriesata=priceData[0].dates;
		this.lineOption.yAxis.min=0;
		this.lineOption.yAxis.max=2000;
		this.lineOption.legend={data: legData};
		this.lineOption.series=series;		
		
		this.echartsIntance.setOption(this.lineOption);
	}
}
