import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Order } from '../models/order';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = environment.baseUrl + "orders/"
  constructor(private httpClient : HttpClient) { }

  getIdAdd(order: Order) : Observable<SingleResponseModel<number>>{
    let url = this.apiUrl + "GetIdAdd"
    return this.httpClient.post<SingleResponseModel<number>>(url, order)
  }

  getOrdersByUser(userId: number) : Observable<ListResponseModel<Order>>{
    let url = this.apiUrl + "GetAllByUser?userId=" + userId
    return this.httpClient.get<ListResponseModel<Order>>(url)
  }
}
