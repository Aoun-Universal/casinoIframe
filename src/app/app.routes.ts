import { Routes } from '@angular/router';
import { VaultComponent } from './modal/vault/vault.component';
import { VipComponent } from './modal/vip/vip.component';
import { RegisterComponent } from './modal/register/register.component';
import { StakeSmartComponent } from './pages/stake-smart/stake-smart.component';
import { LogoutComponent } from './modal/logout/logout.component';
import { ResponsibleGamblingFaqsComponent } from './pages/responsible-gambling-faqs/responsible-gambling-faqs.component';
import { NotificationComponent } from './modal/notification/notification.component';
import { StatisticsComponent } from './modal/statistics/statistics.component';
import { SettingsComponent } from './modal/settings-modals/settings/settings.component';
import { MyBetsComponent } from './pages/my-bets/my-bets.component';
import { HorseRacingComponent } from './pages/horse-racing/horse-racing.component';
import {TeamF1Component} from './pages/stake-team/team-f1/team-f1.component';
import {VipCloudComponent} from './pages/vip-cloud/vip-cloud.component';
import {BlogPageComponent} from './pages/blog-page/blog-page.component';
import {AffiliateComponent} from './pages/affiliate/affiliate.component';
import { RacingMarketDetailsComponent } from './pages/racing-market-details/racing-market-details.component';
import { RetentionProgramComponent } from './pages/retention-program/retention-program.component';
import { AffiliateOverviewComponent } from './pages/affiliate-overview/affiliate-overview.component';


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
        path: 'my-bets',
        loadComponent: () => import('./pages/my-bets/my-bets.component').then((c) => c.MyBetsComponent)
      },
      {
        path: 'racing-market-detail',
        loadComponent: () => import('./pages/racing-market-details/racing-market-details.component').then((c) => c.RacingMarketDetailsComponent)
      },
      {
        path:'my-bets',

            loadComponent: () => import('./pages/my-bets/my-bets.component').then((c) => c.MyBetsComponent)
      },
      {
        path: 'drake',
        loadComponent: () =>
          import('./pages/drake/drake.component').then((c) => c.DrakeComponent),
      },
      {
        path: 'team-f1',
         loadComponent: () => import('./pages/stake-team/team-f1/team-f1.component').then((c)=> c.TeamF1Component)
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
        path: 'affiliate',
        loadComponent: () =>
          import(
            './pages/affiliate/affiliate.component'
            ).then((c) => c.AffiliateComponent),
        children: [
          {
            path: '',
            redirectTo: 'Overview',
            pathMatch: 'full', 
          },
      
          {
            path: 'Overview',
            component: AffiliateOverviewComponent,
          },
          {
            path: 'retention',
            component: RetentionProgramComponent,
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
        path: 'soccer-details',
        loadComponent: () =>
          import('./pages/pal-ful/pal-ful.component').then((c) => c.PalFulComponent),
      },
      {
        path: 'setting',
        loadComponent: () =>
          import('./modal/settings-modals/settings/settings.component').then((c) => c.SettingsComponent),
      },
      {
        path: 'providers',
        loadComponent: () =>
          import('./pages/stake-offer/stake-offer.component').then((c) => c.StakeOfferComponent),
      },
      {
        path: 'blog-page',
        loadComponent: () =>
          import('./pages/blog-page/blog-page.component').then((c) => c.BlogPageComponent),
      },
      {
        path: 'vip-club',
        loadComponent: () =>
          import('./pages/vip-cloud/vip-cloud.component').then((c) => c.VipCloudComponent),
      },
      {
        path: 'stake-offer',
        loadComponent: () =>
          import('./pages/stake-offer/stake-offer.component').then((c) => c.StakeOfferComponent),
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
    path: 'statistics',
    component: StatisticsComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'vip-club',
    component: VipCloudComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];
