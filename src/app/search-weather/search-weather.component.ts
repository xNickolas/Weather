import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.css']
})
export class SearchWeatherComponent implements OnInit {

  guardaData: any;
  clima: any;
  temperature: any;
  city: any;
  valor: string;

  constructor(private api: GetdataService) { }

  ngOnInit() { }

  saveValue(event) {
    this.valor = String(event.target.value);    
  }

  clickButton() {
    this.api.getData(this.valor).subscribe(
      (resp) => {
        this.guardaData = new Object(resp)
        this.clima = this.guardaData.data[0];
        this.temperature = this.clima.temp;
        this.city = this.clima.timezone;
        console.log(this.temperature + this.city);
      });
  }
  
}

      // this.city.getData().subscribe((data) => {
    //   console.log(data);
    // });

    // getApi(event) {
    //     this.api.getData(this.valor).subscribe(
    //       (resp) => {
    //         this.guardaData = new Object(resp)
    //         this.clima = this.guardaData.data[0];
    //         this.temperature = this.clima.temp;
    //         this.city = this.clima.timezone;
    //         console.log(this.temperature + this.city);

    //       });
    //---------------------
    // this.weatherSearchForm = this.formBuilder.group({
    //   data: ['']
    // });



