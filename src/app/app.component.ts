import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Coin} from "./Coin";
import {Observable} from "rxjs";
import {elementAt} from "rxjs/operators";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  titles: string[] = [
    'Rank',
    'Name',
    'Symbol',
    'Market Cap',
    'Price',
    'Volume(24h)',
    '% 24h',
    '% 7d',
    'Show diagram'
  ]
  coins: Coin[] = [];
  coin: Coin;
  coinsObs : Observable<Coin[]> = new Observable<Coin[]>();

  constructor(private http: HttpClient) { }

  ngOnInit(){

    this.coinsObs = this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h,24h,7d');
      this.coinsObs.subscribe((res) => {
          console.log(res)
          this.coins = res
          this.coin = this.coins[0]
          this.coin.sparkline_in_7d.price = this.coin.sparkline_in_7d.price.map(function (eachElement){
            return Number(eachElement.toFixed(2));
          })
        },
        (err) => console.log(err)
      );
  }


}

