import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MyAddressesComponent } from './components/my-addresses/my-addresses.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProfileInfoComponent,
  },
  {
    path: 'info',
    component: ProfileInfoComponent,
  },
  {
    path: 'myorders',
    component: MyOrdersComponent,
  },
  {
    path: 'myaddresses',
    component: MyAddressesComponent,
  },
  {
    path: 'changepassword',
    component: ChangePasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
