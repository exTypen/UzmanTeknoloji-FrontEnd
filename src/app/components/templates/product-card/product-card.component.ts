import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDto } from 'src/app/models/productDto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
    defaultImage = "uploads/default.jpg"
    imageBasePath = environment.baseUrl
    @Input() product: ProductDto

    constructor(private router: Router){

    }

    routeProductPage(productId: number){
      this.router.navigate(["product/"+productId])
    }
}
