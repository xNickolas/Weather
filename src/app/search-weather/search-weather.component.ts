import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { ItemData } from '../model.interface';


@Component({
  selector: 'app-search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.css']
})
export class SearchWeatherComponent implements OnInit {

  guardaData: any;
  // temperature: any;
  // city: any;
  // humidity:any
  // wind:any
  // description:any
  valor: string;
  infoApi
  weatherData
  model:ItemData[]
  

  constructor(private api: GetdataService) { }

  saveValue(event) {
    this.valor = String(event.target.value);    
  }

  clickButton() {
    this.api.getData(this.valor).subscribe(
      (resp) => {
        this.infoApi = resp
        let resposta = this.infoApi.data[0]
        // this.city = this.guardaData.data[0].city_name;
        // this.temperature = this.guardaData.data[0].temp;
        // this.humidity = this.guardaData.data[0].rh;
        // this.wind = this.guardaData.data[0].wind_spd;
        // this.description = this.guardaData.data[0].weather.description;
        this.weatherData = new ItemData(resposta.city_name, resposta.temp, resposta.rh, 
          resposta.wind_spd, resposta.weather.description)
          
          console.log(this.weatherData)
        });
  }
  
  ngOnInit() { 
    this.api.getData("São Paulo").subscribe(
      (resp) => {
        this.infoApi = resp
        let resposta = this.infoApi.data[0]
        // this.city = this.guardaData.data[0].city_name;
        // this.temperature = this.guardaData.data[0].temp;
        // this.humidity = this.guardaData.data[0].rh;
        // this.wind = this.guardaData.data[0].wind_spd;
        // this.description = this.guardaData.data[0].weather.description;
        this.weatherData = new ItemData(resposta.city_name, resposta.temp, resposta.rh, 
          resposta.wind_spd, resposta.weather.description)
          
  })
}

}

