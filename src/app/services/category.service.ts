import { SingleResponseModel } from './../models/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = environment.baseUrl + "categories/"
  constructor(private httpClient:HttpClient) { }

  getAll() : Observable<ListResponseModel<Category>>{
    let url = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Category>>(url)
  }

  getById(id: number) : Observable<SingleResponseModel<Category>>{
    let url = this.apiUrl + "getbyid?id=" + id
    return this.httpClient.get<SingleResponseModel<Category>>(url)
  }
}
