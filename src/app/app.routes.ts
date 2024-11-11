import {Routes} from '@angular/router';
import {VaultComponent} from './modal/vault/vault.component';
import {VipComponent} from './modal/vip/vip.component';
import {RegisterComponent} from './modal/register/register.component';
import {StakeSmartComponent} from './pages/stake-smart/stake-smart.component';
import {LogoutComponent} from './modal/logout/logout.component';
import {ResponsibleGamblingFaqsComponent} from './pages/responsible-gambling-faqs/responsible-gambling-faqs.component';
import {NotificationComponent} from './modal/notification/notification.component';
import {StatisticsComponent} from './modal/statistics/statistics.component';
import {SettingsComponent} from './modal/settings-modals/settings/settings.component';
import { TeamF1Component } from './pages/stake-team/team-f1/team-f1.component';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/before-login/before-login.component').then(
            (c) => c.BeforeLoginComponent
          ),
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'Affiliate',
        component: AffiliateComponent,
      },
      {
        path: 'drake',
        loadComponent: () =>
          import('./pages/drake/drake.component').then((c) => c.DrakeComponent),
      },
      {
        path:'team-f1',
        component:TeamF1Component
      },
      {
        path: 'responsible-gambling',
        loadComponent: () =>
          import(
            './pages/responsible-gambling/responsible-gambling.component'
            ).then((c) => c.ResponsibleGamblingComponent),
        children: [
          {
            path: 'stake-smart',
            component: StakeSmartComponent,
          },
          {
            path: 'responsible-gambling-faqs',
            component: ResponsibleGamblingFaqsComponent,
          },
        ],
      },
      {
        path: 'sport-market',
        loadComponent: () =>
          import('./pages/sports-markets/sports-markets.component').then(
            (c) => c.SportsMarketsComponent
          ),
      },
      {
        path: 'soccer',
        loadComponent: () =>
          import('./pages/soccer/soccer.component').then((c) => c.SoccerComponent),
      },
      {
        path: 'pal-ful',
        loadComponent: () =>
          import('./pages/pal-ful/pal-ful.component').then((c) => c.PalFulComponent),
      },
    ],
  },
  {
    path: 'vault',
    component: VaultComponent,
  },
  {
    path: 'vip',
    component: VipComponent,
  },
  {
    path: 'login',
    component: RegisterComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'statistics',
    component: StatisticsComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'setting',
    component: SettingsComponent
  },
 
  {
    path: '**',
    redirectTo: '',
  },
];
