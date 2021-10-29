import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./components/header/header.component";
import { CurrencyRowComponent } from './components/currency-row/currency-row.component';
import { FormsModule } from "@angular/forms";
import { ModalModule } from "./modal";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {NgApexchartsModule} from "ng-apexcharts";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencyRowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ModalModule,
    NgbModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
