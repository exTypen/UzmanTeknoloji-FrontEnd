import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ProductDto } from 'src/app/models/productDto';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent {

  category:Category
  products:ProductDto[]
  @Input() categoryId:number
  @Input() limit:number
  constructor(private productService: ProductService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getLimitedProductsByCategory(this.categoryId, this.limit)
    this.getCategoryById(this.categoryId)
  }

  getCategoryById(id: number){
    this.categoryService.getById(id).subscribe((response) => {
      this.category = response.data
    })
  }

  getLimitedProductsByCategory(categoryId: number, limit: number){
    this.productService.getLimitedProductsByCategory(categoryId, limit).subscribe((response => {
      this.products = response.data
    }))
  }
}
