import { environment } from './../../../environments/environment';
import { BasketDto } from './../../models/basketDto';
import { BasketService } from './../../services/basket.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Basket } from 'src/app/models/basket';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {


  defaultImage = "uploads/default.jpg"
  imageBasePath = environment.baseUrl
  baskets: BasketDto[]
  constructor(private basketService: BasketService,
    private authService: AuthService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getBaskets(this.authService.getUserId())
  }

  get totalPrice(){
    let total = 0;
    for (let b of this.baskets) {
      total +=b.productDetails.price * b.count
    }
    return Math.round(total*100)/100
   }

  getBaskets(userId: number){
    this.basketService.getAllDetailsByUser(userId).subscribe((response)=>{
      this.baskets = response.data
      console.log(response)
    })
  }

  delete(basketId : number){
    let basket : Basket = Object.assign({id:basketId})
    this.basketService.delete(basket).subscribe((response)=>{
      setTimeout(function () {
        location.reload();
      }, 400);
      this.toastrService.success(response.message, "Başarılı")
    })

  }

}
