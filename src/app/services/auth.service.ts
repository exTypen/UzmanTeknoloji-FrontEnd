import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.baseUrl + "auth/"
  constructor(private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService) { }

  login(loginModel: LoginModel){
    let url = this.apiUrl + "login"
    this.httpClient.post<SingleResponseModel<TokenModel>>(url, loginModel).subscribe((response)=>{
      this.localStorageService.setToken(response.data.token)
      this.toastrService.success(response.message, "Başarılı")
    }, (errorResponse)=>{
      this.toastrService.error(errorResponse.error, "Hata")
    })
  }

  register(registerModel: RegisterModel){
    let url = this.apiUrl + "register"
    this.httpClient.post<SingleResponseModel<TokenModel>>(url, registerModel).subscribe((response)=>{
      this.localStorageService.setToken(response.data.token)
      this.toastrService.success(response.message, "Başarılı")
    }, (errorResponse) =>{
      this.toastrService.error(errorResponse.error, "Hata")
    })
  }
}
