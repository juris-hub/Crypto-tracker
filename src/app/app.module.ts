import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./components/header/header.component";
import { CurrencyRowComponent } from './components/currency-row/currency-row.component';
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './components/chart/chart.component';
import {MatButtonModule} from '@angular/material/button';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import {MatSelectModule} from '@angular/material/select';
import { RemoveMinusSignPipe } from './components/remove-minus-sign.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencyRowComponent,
    DialogComponent,
    ChartComponent,
    RemoveMinusSignPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgxChartsModule,
    MatSelectModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
