import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from 'src/app/models/banner';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ProductDto } from 'src/app/models/productDto';
import { BannerService } from 'src/app/services/banner.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  banners: Banner[]
  defaultImage = "uploads/default.jpg"
  imageBasePath = environment.baseUrl
  productDetails: ProductDto[]
  constructor(private productService: ProductService,
    private bannerService : BannerService) { }

  ngOnInit(): void {
    this.getProductsDetails()
    this.getBanners()
  }


  getProductsDetails(){
    this.productService.getAllDetails().subscribe((response) => {
      this.productDetails = response.data
    })
  }

  getBanners(){
    this.bannerService.getBanners().subscribe(response => {
      this.banners = response.data
    })
  }

  getProductsByCategory(categoryId:number){
    var result = this.productDetails.filter(p => p.categoryId == categoryId)
    return result
  }


  setBannerClass(banner:Banner){
    if (this.banners[0] === banner){
      return "carousel-item active"
    }
    else{
      return "carousel-item"
    }
  }
}

