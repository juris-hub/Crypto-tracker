import { Component, Inject, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ChartData, NewCoin, SeriesObject } from 'src/app/Coin';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @ViewChild(ChartComponent, {static: true}) child : ChartComponent;

  newData? : Observable<NewCoin> = new Observable<NewCoin>();

  date = new Date();
  dataArray : [any, any];


  year = this.date.getFullYear()
  month = this.date.getMonth();
  day = this.date.getDay();

  today = Number(this.date.getTime().toFixed(0).substring(0,10));
  wantedTime = Number(new Date(this.year, this.month - 3, this.day).getTime().toFixed(0).substring(0,10));

  series : NewCoin = {
    market_caps: [],
    prices: [],
    total_volumes: []
  };

  seriesReset : NewCoin = {
    market_caps: [],
    prices: [],
    total_volumes: []
  };


  seriesObject : SeriesObject = {
    name : '',
    value : 0
  };

  chartData : ChartData[] = [{
    name : '',
    series : [this.seriesObject]

  }];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private http: HttpClient) {
   }

  ngOnInit(): void {
    this.seriesReset = this.data[0];
  }

  getDataForMonthsBack(monthsBack: number){

    this.child.chartDataArray = [];
    this.chartData = [];
    this.wantedTime = Number(new Date(this.year, this.month - monthsBack, this.day).getTime().toFixed(0).substring(0,10));

    this.newData = this.http.get<NewCoin>(`https://api.coingecko.com/api/v3/coins/${this.data[1].id}/market_chart/range?vs_currency=usd&from=${this.wantedTime}&to=${this.today}`);
    this.newData.subscribe((res) => {
      var chartData: ChartData = {
        name: "value",
        series: []
      };
    this.seriesReset = res;
    console.log(this.seriesReset)
    this.seriesReset.prices.map(x => {
      chartData.series.push({
        name: new Date(x[0]).toLocaleDateString(),
        value: x[1]
      })

    console.log(chartData)
    })

    this.chartData.push(chartData);
    this.child.chartDataArray = [...this.chartData];

    console.log(chartData)
    },
    );


  }

}
