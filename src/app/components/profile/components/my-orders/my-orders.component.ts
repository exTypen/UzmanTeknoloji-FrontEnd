import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';
import { OrderDetail } from 'src/app/models/orderDetail';
import { OrderDetailDto } from 'src/app/models/orderDetailDto';
import { OrderDto } from 'src/app/models/orderDto';
import { AuthService } from 'src/app/services/auth.service';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { OrderService } from 'src/app/services/order.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  defaultImage = 'uploads/default.jpg';
  imageBasePath = environment.baseUrl;

  orderDtos: OrderDto[]
  orderDetailDtos : OrderDetailDto[]
  constructor(
    private orderService: OrderService,
    private orderDetailService: OrderDetailService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getOrderDetailsByUser(this.authService.getUserId())
    this.getOrderDetailDtosByOrder(1)
  }

  //2
  getOrderDetailsByUser(userId: number){
    this.orderService.getOrderDetails(userId).subscribe((response)=>{
      this.orderDtos = response.data
    })
  }

  //2
  getOrderDetailDtosByOrder(orderId: number):OrderDetailDto[]{
    this.orderDetailService.getOrderDetailsByOrder(orderId).subscribe((response)=>{
      this.orderDetailDtos = response.data
    })

    return this.orderDetailDtos
  }
}
