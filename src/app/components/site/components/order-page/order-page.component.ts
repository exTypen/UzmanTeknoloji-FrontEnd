import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressDto } from 'src/app/models/addressDto';
import { BasketDto } from 'src/app/models/basketDto';
import { Order } from 'src/app/models/order';
import { OrderDetail } from 'src/app/models/orderDetail';
import { AddressService } from 'src/app/services/address.service';
import { AuthService } from 'src/app/services/auth.service';
import { BasketService } from 'src/app/services/basket.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
})
export class OrderPageComponent implements OnInit {
  totalPrice: number = 0;
  selectedAddress: AddressDto;
  baskets: BasketDto[];
  addresses: AddressDto[];
  constructor(
    private dataTransferService: DataTransferService<BasketDto[]>,
    private addressService: AddressService,
    private authService: AuthService,
    private orderService: OrderService,
    private orderDetailService: OrderDetailService,
    private basketService: BasketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.baskets = this.dataTransferService.getData();
    this.baskets.forEach((basket) => {
      this.totalPrice += basket.count * basket.productDetails.price;
    });
    this.getAddresses();
  }

  getAddresses() {
    this.addressService
      .getAddressDetailsByUser(this.authService.getUserId())
      .subscribe((response) => {
        this.selectedAddress = response.data[0];
        this.addresses = response.data;
      });
  }

  addOrder() {
    let orderModel: Order = Object.assign({
      userId: this.authService.getUserId(),
      addressId: this.selectedAddress.id,
      orderStatusId: 1,
      createDate: new Date(),
      active: true,
    });
    this.orderService.getIdAdd(orderModel).subscribe((response) => {
      this.basketService
        .deleteAllByUser(this.authService.getUserId())
        .subscribe();
      let orderDetails: OrderDetail[] = [];
      this.baskets.forEach((basket) => {
        let orderDetail: OrderDetail = Object.assign({
          orderId: response.data,
          productId: basket.productDetails.id,
          count: basket.count,
          price: basket.productDetails.price,
          createDate: new Date(),
          active: true
        });
        orderDetails.push(orderDetail)
      });
      this.orderDetailService.multiAdd(orderDetails).subscribe((response)=>{
        this.router.navigate(["/"])
      })
    });
  }
}
