import { environment } from './../../../environments/environment';
import { BasketDto } from './../../models/basketDto';
import { BasketService } from './../../services/basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {


  defaultImage = "uploads/default.jpg"
  imageBasePath = environment.baseUrl
  baskets: BasketDto[]
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.getBaskets()
  }

  get totalPrice(){
    let total = 0;
    for (let b of this.baskets) {
      total +=b.productDetails.price * b.count
    }
    return Math.round(total*100)/100
   }

  getBaskets(){
    this.basketService.getAllDetailsByUser(2).subscribe((response)=>{
      this.baskets = response.data
      console.log(response)
    })
  }

}
