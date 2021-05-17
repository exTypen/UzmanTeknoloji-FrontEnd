import { ResponseModel } from './../models/responseModel';
import { BasketDto } from './../models/basketDto';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Basket } from './../models/basket';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  apiUrl = environment.baseUrl + 'baskets/';
  constructor(private httpClient: HttpClient) {}

  add(basketModel: Basket): Observable<ResponseModel> {
    let url = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(url, basketModel);
  }

  getAllDetailsByUser(
    userId: number
  ): Observable<ListResponseModel<BasketDto>> {
    let url = this.apiUrl + 'GetAllDetailsByUser?userid=' + userId;
    return this.httpClient.get<ListResponseModel<BasketDto>>(url);
  }
}
