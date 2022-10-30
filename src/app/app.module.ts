import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ValueButtonComponent } from './value-button/value-button.component';
import {ɵEmptyOutletComponent} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ValueButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ɵEmptyOutletComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
