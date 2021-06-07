import { Component, OnInit } from '@angular/core';
import { AddressDto } from 'src/app/models/addressDto';
import { AddressService } from 'src/app/services/address.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-addresses',
  templateUrl: './my-addresses.component.html',
  styleUrls: ['./my-addresses.component.css']
})
export class MyAddressesComponent implements OnInit {

  addresses: AddressDto[]
  constructor(private addressService: AddressService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.getAddressDetails(this.authService.getUserId())
  }

  getAddressDetails(userId: number){
    this.addressService.getAddressDetailsByUser(userId).subscribe((response)=>{
      this.addresses = response.data
    })
  }
}
