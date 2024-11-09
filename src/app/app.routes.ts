import { Routes } from '@angular/router';
import { VaultComponent } from './modal/vault/vault.component';
import { VipComponent } from './modal/vip/vip.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/layout/layout.component').then(c => c.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent:()=> import ('./pages/before-login/before-login.component').then(c => c.BeforeLoginComponent),
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
      }
    ]
  },
  {
    path:'valut',
    component:VaultComponent
  },
  {
    path:'vip',
    component:VipComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
