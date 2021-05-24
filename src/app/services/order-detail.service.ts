import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { OrderDetail } from '../models/orderDetail';
import { OrderDetailDto } from '../models/orderDetailDto';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailService {
  apiUrl = environment.baseUrl + 'orderDetails/';
  constructor(private httpClient: HttpClient) {}

  multiAdd(orderDetails: OrderDetail[]): Observable<ResponseModel> {
    let url = this.apiUrl + 'MultiAdd';
    return this.httpClient.post<ResponseModel>(url, orderDetails);
  }
  getOrderDetailsByOrder(orderId: number) : Observable<ListResponseModel<OrderDetailDto>>{
    let url = this.apiUrl + "GetAllDetailsByOrder?orderId=" + orderId;
    return this.httpClient.get<ListResponseModel<OrderDetailDto>>(url)
  }

  calculateOrderTotalPrice(orderId: number) : Observable<SingleResponseModel<number>>{
    let url = this.apiUrl + "CalculateOrderTotalPrice?orderId=" + orderId;
    return this.httpClient.get<SingleResponseModel<number>>(url)
  }
}
