import { environment } from './../../environments/environment';
import { Basket } from './../models/basket';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  apiUrl = environment.baseUrl + "baskets/"
  constructor(private httpClient: HttpClient) {  }

  add(basketModel: Basket){
    let url = this.apiUrl + "add"
    this.httpClient.post(url, basketModel)
  }
}
