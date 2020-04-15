import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchWeatherComponent } from './search-weather/search-weather.component';

//services
import {  HttpClientModule } from '@angular/common/http';
import { DisplayWeatherComponent } from './display-weather/display-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchWeatherComponent,
    DisplayWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
