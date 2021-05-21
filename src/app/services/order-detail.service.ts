import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { OrderDetail } from '../models/orderDetail';
import { OrderDetailDto } from '../models/orderDetailDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  apiUrl = environment.baseUrl + "orderDetails/"
  constructor(private httpClient: HttpClient) { }

  multiAdd(orderDetails: OrderDetail[]) : Observable<ResponseModel>{
    let url = this.apiUrl + "MultiAdd"
    return this.httpClient.post<ResponseModel>(url, orderDetails)
  }

  getOrderDetailDtosByOrder(orderId: number) : Observable<ListResponseModel<OrderDetailDto>>{
    let url = this.apiUrl + "GetAllOrderDetailDtosByOrder?orderId=" + orderId
    return this.httpClient.get<ListResponseModel<OrderDetailDto>>(url)
  }
}
