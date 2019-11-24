import { Component, OnInit } from '@angular/core';
import { weekList,monthList,quarterList,yearList } from '../model/stockpriceList';

@Component({
  selector: 'app-mulstockchart',
  templateUrl: './mulstockchart.component.html',
  styleUrls: ['./mulstockchart.component.css']
})
export class MulstockchartComponent implements OnInit {
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
			//data: this.priceList.dates
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			//data: this.priceList[0].values,
			type: 'line'
		}]
	};
		
	}
	
	setWeek(){
		this.priceList=weekList;
 		var legend={data:['500512','500513']};
		this.lineOption.legend=legend; 		
		this.lineOption.xAxis.data=this.priceList[0].dates;
		this.lineOption.yAxis.min=0;
		this.lineOption.yAxis.max=2000;
		var series=[{
			name:this.priceList[0].stockCd;
			type: 'line';
			data: this.priceList[0].values;
		},
		{
			name:this.priceList[1].stockCd;
			type: 'line';
			data: this.priceList[1].values;
		}
		];
		this.lineOption.series=series;
 		//this.lineOption.series.push(series[0]);
		//this.lineOption.series.push(series[1]);
		this.echartsIntance.setOption(this.lineOption);

	}
	 setMonth(){
		this.priceList=monthList;
		this.lineOption.xAxis.data=this.priceList.dates;
		this.lineOption.series[0].data=this.priceList.values ;
		this.echartsIntance.setOption(this.lineOption);

	}
	
	setQuarter(){
		
		this.priceList=quarterList;
		this.lineOption.xAxis.data=this.priceList.dates;
		this.lineOption.series[0].name=this.priceList.stockCd ;
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
