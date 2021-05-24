import { Component, OnInit } from '@angular/core';
import { BasketDto } from 'src/app/models/basketDto';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  baskets: BasketDto[]
  constructor(private dataTransferService: DataTransferService<BasketDto[]>) { }

  ngOnInit(): void {
    this.baskets = this.dataTransferService.getData();
  }

}
