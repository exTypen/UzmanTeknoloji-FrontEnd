import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  selectedCategory: Category[] = []
  categories: Category[]
  constructor( private categoryService : CategoryService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getAll().subscribe(response => {
      this.categories = response.data
    })
  }

  routeCategory(category: Category){
    this.selectedCategory = []
    this.selectedCategory.push(category)
    let categories = this.selectedCategory.map(c => c.id)
    this.router.navigate(["products/"], {queryParams:{ categories }, queryParamsHandling: "merge", relativeTo: this.route})
  }
}
