import { BasketComponent } from './components/basket/basket.component';

import { MainPageComponent } from './components/main-page/main-page.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  { path: 'product/:productId', component: ProductPageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'neworder', component: OrderPageComponent },
  { path: 'basket', component: BasketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
