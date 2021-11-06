import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewCoin } from 'src/app/Coin';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  selected = 'option2';

  constructor(@Inject(MAT_DIALOG_DATA) public data: NewCoin) {
   }

  ngOnInit(): void {
    console.log(this.data)
  }

}
