import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductDto } from '../models/productDto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = environment.baseUrl + "products/"
  constructor(private httpClient: HttpClient) { }

  getAllDetails() : Observable<ListResponseModel<ProductDto>>{
    let url = this.apiUrl + "getallproductdetails"
    return this.httpClient.get<ListResponseModel<ProductDto>>(url);
  }

  getAllDetailsById(id:number) : Observable<ListResponseModel<ProductDto>>{
    let url = this.apiUrl + "getallproductdetailsbyid?id=" + id
    return this.httpClient.get<ListResponseModel<ProductDto>>(url);
  }

  getAllProductDetailsFilteredByPage(brandId: number, categoryId: number, page: number, pageSize: number) : Observable<ListResponseModel<ProductDto>>{
    let url = this.apiUrl + "GetAllProductDetailsFilteredByPage?brandId="+brandId+"&categoryId="+ categoryId +"&page="+ page +"&pageSize="+ pageSize
    return this.httpClient.get<ListResponseModel<ProductDto>>(url)
  }

  getLimitedProductsByCategory(categoryId: number, limit: number) : Observable<ListResponseModel<ProductDto>>{
    let url = this.apiUrl + "GetLimitedProductDetailsByCategory?id="+ categoryId +"&limit=" + limit
    return this.httpClient.get<ListResponseModel<ProductDto>>(url)
  }

}
