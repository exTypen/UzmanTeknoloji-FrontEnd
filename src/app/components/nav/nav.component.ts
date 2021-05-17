import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Category } from 'src/app/models/category';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  userLogged: boolean;
  userName: string;

  isAdminPage: boolean;
  adminPageRole: 'admin';

  userItems: MenuItem[];

  selectedCategory: Category[] = [];
  categories: Category[];
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getUserName();
    this.setUserLogged();
    this.createUserItems();
  }

  getCategories() {
    this.categoryService.getAll().subscribe((response) => {
      this.categories = response.data;
    });
  }

  routeCategory(category: Category) {
    this.selectedCategory = [];
    this.selectedCategory.push(category);
    let categories = this.selectedCategory.map((c) => c.id);
    this.router.navigate(['products/'], {
      queryParams: { categories },
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
  }

  routeLogin() {
    this.router.navigate(['login/']);
  }

  routeRegister() {
    this.router.navigate(['register/']);
  }

  async createUserItems() {
    if (this.userLogged) {
      await this.setIsAdminPage();
      this.userItems = [];
      if (this.isAdminPage) {
        this.userItems.push(
          { label: 'Admin', icon: 'pi pi-briefcase', routerLink: 'admin' },
          { separator: true }
        );
      }
      this.userItems.push(
        { label: 'Profil', icon: 'pi pi-user', routerLink: ['profile'] },
        { label: 'Sepet', icon: 'pi pi-shopping-cart', routerLink: ['basket'] },
        {
          label: 'Çıkış',
          icon: 'pi pi-sign-out',
          command: () => {
            this.authService.logOut();
          },
        }

      );
    } else {
      this.userItems = [
        {
          label: 'Kayıt ol',
          icon: 'pi pi-user-edit',
          command: () => {
            this.routeRegister();
          },
        },
        {
          label: 'Giriş yap',
          icon: 'pi pi-sign-in',
          command: () => {
            this.routeLogin();
          },
        },
      ];
    }
  }

  async setIsAdminPage() {
    this.isAdminPage = await this.authService.haveRole('admin');
  }

  setUserLogged() {
    this.userLogged = this.authService.loggedIn();
  }

  getUserName() {
    this.userName = this.authService.getUserName();
  }
}
