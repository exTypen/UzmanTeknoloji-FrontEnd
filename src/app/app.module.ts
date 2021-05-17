import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductCardComponent } from './components/templates/product-card/product-card.component';
import { CategorySliderComponent } from './components/templates/category-slider/category-slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MultiSelectModule} from 'primeng/multiselect';
import {CarouselModule} from 'primeng/carousel';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

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
