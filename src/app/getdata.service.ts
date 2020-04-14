import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "https://api.weatherbit.io/v2.0/current?city=SaoPaulo&key=https://api.weatherbit.io/v2.0/current?key=d62b61490aef43ed944f19a2cd7b8a64&city=SaoPaulo";

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  public key:any;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(apiUrl + this.key);
  }

}
