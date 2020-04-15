import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "https://api.weatherbit.io/v2.0/current?key=d62b61490aef43ed944f19a2cd7b8a64&lang=pt&city=";

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }

  getData(retornaCidade) {
    return this.http.get(apiUrl + retornaCidade);
  }

}
