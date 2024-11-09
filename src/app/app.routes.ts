import { Routes } from '@angular/router';
import { RegisterComponent } from './modal/register/register.component';
import { StakeSmartComponent } from './pages/stake-smart/stake-smart.component';
import { LogoutComponent } from './modal/logout/logout.component';
import { ResponsibleGamblingFaqsComponent } from './pages/responsible-gambling-faqs/responsible-gambling-faqs.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/layout/layout.component').then(c => c.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import ('./pages/before-login/before-login.component').then(c => c.BeforeLoginComponent),
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
        children: [
          {
            path:'stake-smart',
            component:StakeSmartComponent
          },
          {
            path:'responsible-gambling-faqs',
            component:ResponsibleGamblingFaqsComponent
          }
        ]
      },
      {
        path: 'sport-market',
        loadComponent: () => import('./pages/sports-markets/sports-markets.component').then(c => c.SportsMarketsComponent)
      }
    ]
  },
  {
    path: 'login',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
