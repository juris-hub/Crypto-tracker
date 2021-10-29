import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {ChartComponent} from "../components/chart/chart.component";

@NgModule({
  imports: [CommonModule, NgApexchartsModule],
    declarations: [
      ModalComponent,
      ChartComponent
    ],
    exports: [ModalComponent]
})
export class ModalModule { }
