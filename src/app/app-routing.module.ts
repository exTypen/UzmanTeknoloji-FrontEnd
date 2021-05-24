import { LoginGuard } from './guards/login.guard';
import { BasketComponent } from './components/basket/basket.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth-components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/auth-components/register/register.component';
import { ProfileComponent } from './components/profile-components/profile/profile.component';
import { OrderPageComponent } from './components/order-page/order-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainPageComponent },
  { path: 'product/:productId', component: ProductPageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'basket', component: BasketComponent, canActivate:[LoginGuard]},
  { path: 'profile', component: ProfileComponent, canActivate:[LoginGuard]},
  { path: 'neworder', component: OrderPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
