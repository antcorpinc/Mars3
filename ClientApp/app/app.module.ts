import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent }   from './app.component';
import {SecondComponent} from "./test.component";
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule,routing ],
  declarations: [
     AppComponent ,
     SecondComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
