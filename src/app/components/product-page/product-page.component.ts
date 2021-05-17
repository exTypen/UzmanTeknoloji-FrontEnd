import { AuthService } from './../../services/auth.service';
import { Basket } from './../../models/basket';
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

  isLogged:boolean

  defaultImage = "uploads/default.jpg"
  imageBasePath = environment.baseUrl;

  userId:number

  productDto:ProductDto
  productId:number
  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserId()
    this.activatedRoute.params.subscribe((params)=>{
      if(params["productId"]){
        this.getProductDetails(params["productId"])
      }
    })
  }

  getUserId(){
    this.userId = this.authService.getUserId()
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

  //TODO:2 tane giriş yapmış mı kontrol eden formül var kontrol et.
  addBasket(id:number){
    this.isLogged = this.authService.loggedIn()
    if(this.isLogged){
      let basketModel:Basket = Object.assign({productId:id, userId: this.userId, count: 2, active: true})
      console.log(basketModel)
    }

  }
}
