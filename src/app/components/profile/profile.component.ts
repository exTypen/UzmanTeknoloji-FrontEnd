import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  items: MenuItem[];
  currentPage: string = "profileinfo"
  constructor() {}

  ngOnInit(): void {
    this.setMenuItems();
  }

  setMenuItems() {
    this.items = [
      {
        label: 'Hesap Ayarları',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Hesap Bilgileri',
            command:() => {
              this.currentPage = "profileinfo"
            }
          },
          {
            label: 'Şifre Değiştir',
            command:() => {
              this.currentPage = "changepassword"
            }
          },
        ],
        command:() => {

        }
      },
      {
        label: 'Siparişlerim',
        icon: 'pi pi-shopping-cart',
        command:() => {
          this.currentPage = "myorders"
        }
      },
    ];
  }
}
