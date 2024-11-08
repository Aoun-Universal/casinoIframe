import { Routes } from '@angular/router';

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
      },

      {
        path: 'responsible-gambling',
        loadComponent: () => import('./pages/responsible-gambling/responsible-gambling.component').then(c => c.ResponsibleGamblingComponent),
      },
      {
        path:'sport-market',
        loadComponent: () => import('./pages/sports-markets/sports-markets.component').then(c=>c.SportsMarketsComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];
