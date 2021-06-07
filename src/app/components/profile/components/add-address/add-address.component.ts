import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/models/address';
import { City } from 'src/app/models/city';
import { AddressService } from 'src/app/services/address.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css'],
})
export class AddAddressComponent implements OnInit {
  newAddressForm: FormGroup;
  cities: City[]
  cityId: number = 0
  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private addressService: AddressService,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.cities = [{id: 1, name: "ankara", createDate: new Date(), active: true},{id: 2, name: "istanbul", createDate: new Date(), active: true}]
    this.createNewAddressForm()
  }

  createNewAddressForm() {
    this.newAddressForm = this.formBuilder.group({
      name: ['', Validators.required],
      cityId: ['', Validators.required],
      addressDetail: ['', Validators.required],
      postalCode: ['', Validators.required],
    });
  }

  add(){
    if(this.newAddressForm.valid){
      let addressModel : Address = Object.assign({userId: this.authService.getUserId(), createDate: new Date(), acitve: true}, this.newAddressForm.value)
      this.addressService.add(addressModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı")

      },errorResponse=>{
        this.toastrService.error(errorResponse.error.message,"Hata")
      })

    }else{
      this.toastrService.error("Tüm alanları doldurun","Hata");
    }
  }
}
