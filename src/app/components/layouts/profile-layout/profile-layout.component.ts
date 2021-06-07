import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.css']
})
export class ProfileLayoutComponent implements OnInit {

  items: MenuItem[];
  constructor(private router: Router) {}

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
            command: () => {
              this.router.navigate(['/profile/info'])
            },
          },
          {
            label: 'Adreslerim',
            command: () => {
              this.router.navigate(['/profile/myaddresses'])
            },
          },
          {
            label: 'Şifre Değiştir',
            command: () => {
              this.router.navigate(['/profile/changepassword'])
            },
          },
        ],
        command: () => {},
      },
      {
        label: 'Siparişlerim',
        icon: 'pi pi-shopping-cart',
        command: () => {
          this.router.navigate(['/profile/myorders'])
        },
      },
    ];
  }
}
