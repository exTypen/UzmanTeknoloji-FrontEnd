import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { LoginModel } from '../models/loginModel';
import { OperationClaim } from '../models/operationClaim';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userName: string;
  currentUserId: number;
  roles: string[] = [];
  apiUrl = environment.baseUrl + 'auth/';
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService,
    private jwtHelperService: JwtHelperService,
    private router: Router
  ) {
    this.setUserStats();
  }

  login(loginModel: LoginModel) {
    let url = this.apiUrl + 'login';
    this.httpClient
      .post<SingleResponseModel<TokenModel>>(url, loginModel)
      .subscribe(
        (response) => {
          this.localStorageService.setToken(response.data.token);
          this.router.navigate(['/']);
          setTimeout(function () {
            location.reload();
          }, 400);
          this.toastrService.success(response.message, 'Başarılı');
        },
        (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Hata');
        }
      );
  }

  register(registerModel: RegisterModel) {
    let url = this.apiUrl + 'register';
    this.httpClient
      .post<SingleResponseModel<TokenModel>>(url, registerModel)
      .subscribe(
        (response) => {
          this.localStorageService.setToken(response.data.token);
          this.toastrService.success(response.message, 'Başarılı');
          this.router.navigate(['/']);
          setTimeout(function () {
            location.reload();
          }, 400);
        },
        (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Hata');
        }
      );
  }

  async setUserStats() {
    if (this.loggedIn()) {
      this.setCurrentUserId();
      this.setUserName();
      await this.setRoles();
    }
  }

  loggedIn(): boolean {
    let isExpired = this.jwtHelperService.isTokenExpired(
      this.localStorageService.getToken()
    );
    return !isExpired;
  }

  async setRoles() {
    if (
      (this.roles == undefined || this.roles.length === 0) &&
      this.localStorageService.getToken() != null &&
      this.loggedIn()
    ) {
      this.roles = (
        await this.httpClient
          .get<ListResponseModel<OperationClaim>>(
            environment.baseUrl +
              'userclaims/getbyuser?id=' +
              this.currentUserId
          )
          .toPromise()
      ).data.map((r) => r.name);
    }
  }

  setCurrentUserId() {
    var decoded = this.getDecodedToken();
    var propUserId = Object.keys(decoded).filter((x) =>
      x.endsWith('/nameidentifier')
    )[0];
    this.currentUserId = Number(decoded[propUserId]);
  }

  async haveRole(role: string): Promise<boolean> {
    await this.setRoles();
    var check = this.roles.some((item) => {
      return item == role;
    });
    return check;
  }

  setUserName() {
    var decoded = this.getDecodedToken();
    var propUserName = Object.keys(decoded).filter((x) =>
      x.endsWith('/name')
    )[0];
    this.userName = decoded[propUserName];
  }

  logOut() {
    this.localStorageService.removeToken();
    this.roles = [];
    this.toastrService.success('Çıkış yapıldı', 'Başarılı');
    setTimeout(function () {
      location.reload();
    }, 400);
  }

  getUserName(): string {
    return this.userName;
  }

  getUserId(): number {
    return this.currentUserId;
  }

  getDecodedToken() {
    try {
      return this.jwtHelperService.decodeToken(
        this.localStorageService.getToken()
      );
    } catch (Error) {
      return null;
    }
  }
}
