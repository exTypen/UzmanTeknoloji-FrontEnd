import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css'],
})
export class AdminProductListComponent implements OnInit {
  constructor(private productSerivice: ProductService) {}

  ngOnInit(): void {}
}
