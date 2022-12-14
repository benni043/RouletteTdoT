import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ValueButtonComponent } from './value-button/value-button.component';
import {ÉµEmptyOutletComponent} from "@angular/router";
import { WheelComponent } from './wheel/wheel.component';

@NgModule({
  declarations: [
    AppComponent,
    ValueButtonComponent,
    WheelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ÉµEmptyOutletComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
