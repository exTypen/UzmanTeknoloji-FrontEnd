import { Component, Input } from '@angular/core';
import { OrderDetailDto } from 'src/app/models/orderDetailDto';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent{
  defaultImage = "uploads/default.jpg"
  imageBasePath = environment.baseUrl
  orderDetailDtos: OrderDetailDto[]
  @Input() orderId: number
  constructor(private orderDetailService: OrderDetailService) { }

  ngOnInit(): void {
    this.getOrderDetailsByOrder(this.orderId)
  }

  getOrderDetailsByOrder(orderId: number){
    this.orderDetailService.getOrderDetailsByOrder(orderId).subscribe((response)=>{
      this.orderDetailDtos = response.data
    })
  }
}
