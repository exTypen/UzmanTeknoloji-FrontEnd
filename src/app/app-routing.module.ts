import { ProfileLayoutComponent } from './components/layouts/profile-layout/profile-layout.component';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './components/layouts/site-layout/site-layout.component';
import { AdminLayoutsComponent } from './components/layouts/admin-layouts/admin-layouts.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SiteLayoutComponent,
    loadChildren: () =>
      import('./components/site/site.module').then((m) => m.SiteModule),
  },

  {
    path: 'site',
    component: SiteLayoutComponent,
    loadChildren: () =>
      import('./components/site/site.module').then((m) => m.SiteModule),
  },

  //Admin Routes
  {
    path: 'admin',
    component: AdminLayoutsComponent,
    loadChildren: () =>
      import('./components/admin/admin.module').then((m) => m.AdminModule),
  },

  //Auth Routes
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
  },

  //Porfile Routes
  {
    path: 'profile',
    component: ProfileLayoutComponent,
    loadChildren: () =>
      import('./components/profile/profile.module').then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
