import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/site/components/main-page/main-page.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/site/components/products/products.component';
import { ProductPageComponent } from './components/site/components/product-page/product-page.component';
import { ProductCardComponent } from './components/templates/product-card/product-card.component';
import { CategorySliderComponent } from './components/templates/category-slider/category-slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SplitButtonModule} from 'primeng/splitbutton';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import { LoginComponent } from './components/auth/components/login/login.component';
import { RegisterComponent } from './components/auth/components/register/register.component';
import { BasketComponent } from './components/site/components/basket/basket.component';
import { MyOrdersComponent } from './components/profile/components/my-orders/my-orders.component';
import { ProfileInfoComponent } from './components/profile/components/profile-info/profile-info.component';
import { ChangePasswordComponent } from './components/profile/components/change-password/change-password.component';
import { OrderComponent } from './components/templates/order/order.component';
import { OrderPriceComponent } from './components/templates/order-price/order-price.component';
import { OrderPageComponent } from './components/site/components/order-page/order-page.component';
import { MyAddressesComponent } from './components/profile/components/my-addresses/my-addresses.component';
import { AddAddressComponent } from './components/profile/components/add-address/add-address.component';
import { AdminLayoutsComponent } from './components/layouts/admin-layouts/admin-layouts.component';
import { SiteLayoutComponent } from './components/layouts/site-layout/site-layout.component';
import { ProfileLayoutComponent } from './components/layouts/profile-layout/profile-layout.component';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavComponent,
    FooterComponent,
    ProductsComponent,
    ProductPageComponent,
    ProductCardComponent,
    CategorySliderComponent,
    LoginComponent,
    RegisterComponent,
    BasketComponent,
    MyOrdersComponent,
    ProfileInfoComponent,
    ChangePasswordComponent,
    OrderComponent,
    OrderPriceComponent,
    OrderPageComponent,
    MyAddressesComponent,
    AddAddressComponent,
    AdminLayoutsComponent,
    SiteLayoutComponent,
    ProfileLayoutComponent,
    AuthLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SplitButtonModule,
    CardModule,
    DropdownModule,
    MenuModule,
    PanelMenuModule,
    RadioButtonModule,
    OverlayPanelModule,
    MenubarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
