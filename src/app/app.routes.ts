import { Routes } from '@angular/router';
import { RegisterComponent } from './modal/register/register.component';

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
      },
      {
        path: 'drake',
        loadComponent: () => import('./pages/drake/drake.component').then(c => c.DrakeComponent),
      }
    ]
  },
  {
    path: 'login',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
