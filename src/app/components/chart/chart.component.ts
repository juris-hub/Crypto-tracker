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
  labels: string[];

  constructor() { }

  ngOnInit(): void {
    this.initializeChartOptions()
    this.coinsObs.subscribe(coins =>

      this.showCoin(coins[0])
    );
  }

    public showCoin( coin: Coin ) {
    this.series = [{
      name: coin.name,
      data: coin.sparkline_in_7d.price,

    }];

    let date = Date.parse(coin.ath_date);
    console.log(date);
    this.labels = [];
     for (let i = coin.sparkline_in_7d.price.length; i > 0; i--) {
        if(i % 10 != 0 ){
          this.labels.push(new Date((i * 3600) * 1000).toTimeString())
        }
     }
   }

  private initializeChartOptions(): void {

    this.title = {
      text: 'Popular Languages'
    };

    this.series = [{
      name: "",
      data: []
    }];

    this.labels = [];


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

}
