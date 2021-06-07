import { environment } from '../../../../../environments/environment';
import { BasketDto } from '../../../../models/basketDto';
import { BasketService } from '../../../../services/basket.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Basket } from 'src/app/models/basket';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { OrderDetail } from 'src/app/models/orderDetail';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  orderDetails: OrderDetail[] = [];
  userId: number;
  defaultImage = 'uploads/default.jpg';
  imageBasePath = environment.baseUrl;
  baskets: BasketDto[];
  constructor(
    private basketService: BasketService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
    private dataTransferService: DataTransferService<BasketDto[]>
  ) {}

  ngOnInit(): void {
    this.getBaskets(this.authService.getUserId());
    this.userId = this.authService.getUserId();
  }

  get totalPrice() {
    let total = 0;
    for (let b of this.baskets) {
      total += b.productDetails.price * b.count;
    }
    return Math.round(total * 100) / 100;
  }

  getBaskets(userId: number) {
    this.basketService.getAllDetailsByUser(userId).subscribe((response) => {
      this.baskets = response.data;
    });
  }

  deleteBasket(basketId: number) {
    let basket: Basket = Object.assign({ id: basketId });
    this.basketService.delete(basket).subscribe((response) => {
      setTimeout(function () {
        location.reload();
      }, 400);
      this.toastrService.success(response.message, 'Başarılı');
    });
  }

  addOrder() {
    this.dataTransferService.setData(this.baskets)
    this.router.navigate(["site/neworder"])
  }
}
