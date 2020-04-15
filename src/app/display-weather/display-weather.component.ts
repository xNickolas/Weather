import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit {

  constructor() { }

  condition: string = "Clear"
  temp: number = 12
  hum: number = 75
  wind: number = 7
  state: string = "São Paulo"

  day: string = "Mon"



  

  ngOnInit(): void {
  }

}
