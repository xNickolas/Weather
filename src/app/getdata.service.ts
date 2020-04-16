import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemData } from './model.interface';





@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  private apiUrl = "https://api.weatherbit.io/v2.0/current"

  private cityComplement = "?city="
  private keyComplement = "&key=cbf7ff9ea59249408e922b1d8762773d&lang=pt"

  constructor(private http: HttpClient) { }

  getData(retornaCidade) {
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

    return this.http.get(this.apiUrl + this.cityComplement + retornaCidade + this.keyComplement, 
      { 'headers': headers })
  }

}
