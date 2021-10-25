import {Component, Input, OnInit} from '@angular/core';
import {Coin} from "../../Coin";


@Component({
  selector: 'tr[app-currency-row]',
  templateUrl: './currency-row.component.html',
  styleUrls: ['./currency-row.component.css']
})
export class CurrencyRowComponent implements OnInit {
  @Input() rank: number;
  @Input() coin: Coin;

  constructor() { }

  ngOnInit(){
  }

}
