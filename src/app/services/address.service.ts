import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address';
import { AddressDto } from '../models/addressDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  apiUrl = environment.baseUrl + "addresses/"
  constructor(private httpClient: HttpClient) { }

  getAddressesByUser(userId: number) : Observable<ListResponseModel<Address>>{
    let url = this.apiUrl + "GetByUser?userId=" + userId;
    return this.httpClient.get<ListResponseModel<Address>>(url);
  }

  getAddressDetailsByUser(userId: number) : Observable<ListResponseModel<AddressDto>>{
    let url = this.apiUrl + "GetAllDetailsByUser?userId=" + userId;
    return this.httpClient.get<ListResponseModel<AddressDto>>(url);
  }

  add(address: Address) : Observable<ResponseModel>{
    let url = this.apiUrl + "Add";
    return this.httpClient.post<ResponseModel>(url, address)
  }
}
