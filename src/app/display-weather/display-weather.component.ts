import { Component, OnInit, Input } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { ItemData } from '../model.interface'


@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit {

 constructor(private weatherData: GetdataService) { }

 day: string = "Monday"

  @Input() weatherDatas

   ngOnInit(): void {
    }

}
