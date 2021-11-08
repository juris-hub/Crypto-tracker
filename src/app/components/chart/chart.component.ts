import {Component, Input, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import {ChartData, Coin, NewCoin, SeriesObject} from "../../Coin";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  view: any[] = [];
  update$ : Subject<any> = new Subject();

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  xScaleMin: number = 5;
  xScaleMax: number = 10;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Price($)';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  @Input() receivedCoin : NewCoin;


  series: any[] = [];
  @Input() chartDataArray: ChartData[] = [];

  multi: {
    name: "coin"
    series: {name: string,value : number}[]
 }[];

  constructor() { }


  ngOnInit(): void {
    this.showCoin();
  }

    public showCoin() {
      var chartData: ChartData = {
        name: "value",
        series: []
      };

    this.receivedCoin.prices.map(x => {
      chartData.series.push({
        name: new Date(x[0]).toLocaleDateString(),
        value: x[1]
      })
    })

    this.chartDataArray.push(chartData);

    }

    updateChart(){
      this.update$.next(true);
    }
}
