import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Category } from 'src/app/models/category';
import { ProductDto } from 'src/app/models/productDto';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categories: Category[]
  selectedCategories?: Category[]

  brands: Brand[]
  selectedBrands?: Brand[]

  deneme: number[]

  productDtos:ProductDto[]

  defaultImage = "uploads/default.jpg"
  imageBasePath = environment.baseUrl
  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if(params["categories"] instanceof Array){
        console.log(params)
        this.getProductDetailsByFilter(params["brands"], params["categories"])
      }
      console.log(params["categories"])
    })
    this.getCategories()
    this.getBrands()
  }

  getCategories(){
    this.categoryService.getAll().subscribe((response)=>{
      this.categories = response.data
    })
  }
  
  getBrands(){
    this.brandService.getAll().subscribe((response)=>{
      this.brands = response.data
    })
  }

  getProductDetailsByFilter(brands: number[], categories: number[]){
    this.productService.getAllDetailsByFilter(brands, categories).subscribe((response)=>{
      this.productDtos = response.data
      console.log(this.productDtos)
    })
  }

  
}
