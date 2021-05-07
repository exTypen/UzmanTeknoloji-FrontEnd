import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDto } from 'src/app/models/productDto';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productDtos:ProductDto[]

  defaultImage = "uploads/default.jpg"
  imageBasePath = environment.baseUrl
  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params["brandId"] && params["categoryId"] && params["page"] && params["pageSize"]){
        this.getAllProductDetailsFilteredByPage(params["brandId"], params["categoryId"], params["page"], params["pageSize"])
      }
    })
  }

  getAllProductDetailsFilteredByPage(brandId: number, categoryId: number, page: number, pageSize: number){
    this.productService.getAllProductDetailsFilteredByPage(brandId, categoryId, page, pageSize).subscribe((response)=>{
      this.productDtos = response.data
      console.log(this.productDtos)
    })
  }
}
