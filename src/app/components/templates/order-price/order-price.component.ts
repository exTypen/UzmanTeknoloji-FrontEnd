import { Component, Input } from '@angular/core';
import { OrderDetailService } from 'src/app/services/order-detail.service';

@Component({
  selector: 'app-order-price',
  templateUrl: './order-price.component.html',
  styleUrls: ['./order-price.component.css']
})
export class OrderPriceComponent  {

  totalPrice:number = 0
  @Input() orderId: number
  constructor(private orderDetailService: OrderDetailService) { }

  ngOnInit(): void {
    this.calculateOrderTotalPrice(this.orderId)
  }

  calculateOrderTotalPrice(orderId: number){
    this.orderDetailService.calculateOrderTotalPrice(orderId).subscribe((response)=>{
      this.totalPrice += response.data
    })
  }

}
