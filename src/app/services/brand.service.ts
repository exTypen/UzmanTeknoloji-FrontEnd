import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = environment.baseUrl + "brands/"
  constructor(private httpClient:HttpClient) { }

  getAll() : Observable<ListResponseModel<Brand>>{
    let url = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Brand>>(url)
  }
}
