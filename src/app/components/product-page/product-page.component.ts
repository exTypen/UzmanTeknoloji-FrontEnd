import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDto } from 'src/app/models/productDto';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {


  defaultImage = "uploads/default.jpg"
  imageBasePath = environment.baseUrl;

  productDto:ProductDto
  productId:number
  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["productId"]){
        this.getProductDetails(params["productId"])
      }
    })
  }

  getProductDetails(id:number){
    this.productService.getAllDetailsById(id).subscribe((response)=>{
      this.productDto = response.data[0]
    })
  }

  setImageClass(imagePath:string){
    if(imagePath === this.productDto.images[0]){
      return "carousel-item active"
    }else{
      return "carousel-item"
    }
  }
}
