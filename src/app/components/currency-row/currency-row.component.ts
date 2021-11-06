
import { HttpClient } from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {Coin, NewCoin} from "../../Coin";
import {MatDialog} from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'tr[app-currency-row]',
  templateUrl: './currency-row.component.html',
  styleUrls: ['./currency-row.component.css']
})
export class CurrencyRowComponent implements OnInit {
  @Input() rank: number;
  @Input() coin: Coin;
  newCoin? : Observable<NewCoin[]> = new Observable<NewCoin[]>();
  coinId : String;
  date = new Date();

  year = this.date.getFullYear()
  month = this.date.getMonth();
  day = this.date.getDay();

  today = Number(this.date.getTime().toFixed(0).substring(0,10));
  oneYearAgo = Number(new Date(this.year - 1, this.month, this.day).getTime().toFixed(0).substring(0,10));


  constructor(private http: HttpClient, public dialog : MatDialog) { }

  ngOnInit(){
  }

  getCoin(name : string){

    this.coinId = name.toLowerCase();
    console.log(this.coinId)
    this.newCoin = this.http.get<NewCoin[]>(`https://api.coingecko.com/api/v3/coins/${this.coinId}/market_chart/range?vs_currency=usd&from=${this.oneYearAgo}&to=${this.today}`);
    this.newCoin.subscribe((res) => {
      const dialogRef = this.dialog.open(DialogComponent, { data: res, height: '600px',
      width: '900px'});
  },
  );

  }
}
