import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Banner } from '../models/banner';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  apiUrl = environment.baseUrl + "banners/"
  constructor(private httpClient: HttpClient) { }

  getBanners() : Observable<ListResponseModel<Banner>>{
    let url = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Banner>>(url)
  }
}
