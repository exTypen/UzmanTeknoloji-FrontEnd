import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layouts',
  templateUrl: './admin-layouts.component.html',
  styleUrls: ['./admin-layouts.component.css']
})
export class AdminLayoutsComponent implements OnInit {

  items: MenuItem[];
  currentPage: string = 'mainpage';
  constructor() { }

  ngOnInit(): void {
    this.setMenuItems()
  }


  setMenuItems(){
    this.items = [
      {
        label: 'Ana Sayfa',
        icon: 'pi pi-shopping-cart',
        command: () => {
          this.currentPage = 'mainpage';
        },
      },
      {
        label: 'Ürünler',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Ürün Yönetimi',
            command: () => {
              this.currentPage = 'mainpage';
            },
          },
          {
            label: 'Kategori Yönetimi',
            command: () => {
              this.currentPage = 'mainpage';
            },
          },
          {
            label: 'Marka Yönetimi',
            command: () => {
              this.currentPage = 'mainpage';
            },
          },
        ],
        command: () => {},
      },
      {
        label: 'Siparişler',
        icon: 'pi pi-shopping-cart',
        command: () => {
          this.currentPage = 'mainpage';
        },
      },
    ];
  }

}
