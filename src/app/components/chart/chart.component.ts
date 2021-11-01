import {Component, Input, OnInit} from '@angular/core';
import * as apex from 'ng-apexcharts';
import {Coin} from "../../Coin";
import {Observable} from "rxjs";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() coinsObs : Observable<Coin[]>;


  series: apex.ApexAxisChartSeries;
  chart: apex.ApexChart;
  title: apex.ApexTitleSubtitle;
  legend: apex.ApexLegend;
  xaxis : apex.ApexXAxis;
  data : Coin;
  dates? : String[];

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions()
    this.subscribeToCoins()
  }

    public showCoin( coin: Coin ) {

    this.title = {
      text : coin.name + ' to USD chart'
    }

    this.series = [{
      name: coin.name,
      data: coin.sparkline_in_7d.price.map((x) => Number(x.toFixed(0))),

    }];

    let date = Date.parse(coin.ath_date);
    for (let i = coin.sparkline_in_7d.price.length; i > 0; i--) {
      this.dates?.push(new Date((date * 3600) * 1000).toTimeString())
     }
    this.xaxis ={
      type: "category",
      categories: this.dates,
      min: new Date("01 Mar 2012").getTime(),
      tickAmount: 6
    }



   }

  private initializeChartOptions(): void {

    this.title = {
      text: ''
    };

    this.series = [{
      name: "",
      data: []
    }];

    this.xaxis = {

      type: "datetime",
      categories: [],

    };


    this.chart = {
      type: 'line'

    };

    this.legend = {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      showForSingleSeries: true,
      onItemClick: {
        toggleDataSeries: false
      }
    };

  }

  private subscribeToCoins(){
    this.coinsObs.subscribe(coins =>

      this.showCoin(coins[0])

    );
  }

}
