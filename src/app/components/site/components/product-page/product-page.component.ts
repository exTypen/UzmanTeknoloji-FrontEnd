import { BasketService } from './../../../../services/basket.service';
import { AuthService } from './../../../../services/auth.service';
import { Basket } from './../../../../models/basket';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDto } from 'src/app/models/productDto';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order';
import { OrderDetail } from 'src/app/models/orderDetail';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  isLogged: boolean;
  numbers: number[] = [1, 2, 3, 4, 5];
  selectedNumber: number = 1;

  defaultImage = 'uploads/default.jpg';
  imageBasePath = environment.baseUrl;

  userId: number;

  productDto: ProductDto;
  productId: number;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private basketService: BasketService,
    private orderService: OrderService,
    private orderDetailService: OrderDetailService,
  ) {}

  ngOnInit(): void {
    this.getUserId();
    this.activatedRoute.params.subscribe((params) => {
      if (params['productId']) {
        this.getProductDetails(params['productId']);
      }
    });
  }

  getUserId() {
    this.userId = this.authService.getUserId();
  }

  getProductDetails(id: number) {
    this.productService.getAllDetailsById(id).subscribe((response) => {
      this.productDto = response.data[0];
      console.log(this.productDto)
    });
  }

  setImageClass(imagePath: string) {
    if (imagePath === this.productDto.images[0]) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

  addBasket(id: number) {
    this.isLogged = this.authService.loggedIn();
    if (this.isLogged) {
      let basketModel: Basket = Object.assign({
        productId: id,
        userId: this.userId,
        count: this.selectedNumber,
        createDate: new Date(),
        active: true,
      });
      this.basketService.add(basketModel).subscribe((response) => {
        console.log(response);
      });
    }
  }

  addOrder(productDto: ProductDto) {
    let order: Order = Object.assign({
      userId: this.userId,
      addressId: 9,
      orderStatusId: 1,
      createDate: new Date(),
      active: true,
    });
    this.orderService.getIdAdd(order).subscribe((response) => {
      var orderDetails: OrderDetail[] = [];

      let orderDetail: OrderDetail = Object.assign({
        orderId: response.data,
        productId: productDto.id,
        count: this.selectedNumber,
        price: productDto.price,
        createDate: new Date(),
        active: true,
      });
      orderDetails.push(orderDetail);

      this.orderDetailService
        .multiAdd(orderDetails)
        .subscribe((response) => {
          console.log(response)
        });
    });
  }
}
