
import { HttpClient } from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {Coin} from "../../Coin";
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
  newCoin? : Observable<Coin[]> = new Observable<Coin[]>();
  coinName : String;

  constructor(private http: HttpClient, public dialog : MatDialog) { }

  ngOnInit(){
  }

  getCoin(name : string){

    this.coinName = name.toLowerCase();
    this.newCoin = this.http.get<Coin[]>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${this.coinName}&order=market_cap_desc&per_page=100&page=1&sparkline=true`);
    this.newCoin.subscribe((res) => {
      const dialogRef = this.dialog.open(DialogComponent, { data: res[0], backdropClass: 'dialog-bg-trans'});
  },
  );

  }
}
