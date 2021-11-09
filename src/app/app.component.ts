import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Coin} from "./Coin";
import {Observable} from "rxjs";

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
    'Show Diagram'
  ]
  coins: Coin[] = [];
  coinsObs : Observable<Coin[]> = new Observable<Coin[]>();
  searchText = '';
  filteredCoins : Coin[] = [];

  constructor(private http: HttpClient) { }

  searchCoin(){
    this.filteredCoins = this.coins.filter(coin =>
    coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  ngOnInit(){

    this.coinsObs = this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h,24h,7d');
      this.coinsObs.subscribe((res) => {
          this.coins = res;
          this.filteredCoins = this.coins;
      },
        (err) => console.log(err)
      );
    }

}

