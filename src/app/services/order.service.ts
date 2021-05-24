import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Order } from '../models/order';
import { OrderDto } from '../models/orderDto';
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

  getOrderDetails(userId: number) : Observable<ListResponseModel<OrderDto>>{
    let url = this.apiUrl + "GetAllDetailsByUser?userId=" + userId
    return this.httpClient.get<ListResponseModel<OrderDto>>(url)
  }

}
