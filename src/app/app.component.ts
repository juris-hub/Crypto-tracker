import { Component, OnInit, PACKAGE_ROOT_URL } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Coin} from "./Coin";


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
    '% 7d'
  ]
  coins: Coin[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(){

    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h,24h,7d')
      .subscribe((res) => {
          console.log(res[0]);
          this.coins = res
        },
        (err) => console.log(err)
      );

  }
}

