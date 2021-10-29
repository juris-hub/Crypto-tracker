import {Component, Input, OnInit} from '@angular/core';
import {Coin} from "../../Coin";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalService} from "../../modal";

@Component({
  selector: 'tr[app-currency-row]',
  templateUrl: './currency-row.component.html',
  styleUrls: ['./currency-row.component.css']
})
export class CurrencyRowComponent implements OnInit {
  @Input() rank: number;
  @Input() coin: Coin;

  constructor(private modalService: ModalService) { }

  ngOnInit(){
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
