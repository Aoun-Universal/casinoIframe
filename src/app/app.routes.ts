import { Routes } from '@angular/router';
import { VaultComponent } from './modal/vault/vault.component';
import { VipComponent } from './modal/vip/vip.component';
import { RegisterComponent } from './modal/register/register.component';
import { NotificationComponent } from './modal/notification/notification.component';
import { StatisticsComponent } from './modal/statistics/statistics.component';
import { authGuard } from "./auth/auth.guard";
import {LoginComponent} from "./modal/login/login.component";



export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./components/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      // {
      //   path: '',
      //   loadComponent: () =>
      //     import('./pages/before-login/before-login.component').then(
      //       (c) => c.BeforeLoginComponent
      //     ),
      // },
      // {
      //   path: 'home',
      //   loadComponent: () =>
      //     import('./pages/home/home.component').then((c) => c.HomeComponent),
      //   data: { type: 'authenticated' },
      //   canActivate: [authGuard]
      // },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
        data: { type: 'casino' },
      },
      // {
      //   path: 'sport/home',
      //   loadComponent: () =>
      //     import('./pages/home/home.component').then((c) => c.HomeComponent),
      //   data: { type: 'sport' },
      // },
      // {
      //   path: 'my-bets',
      //   loadComponent: () => import('./pages/my-bets/my-bets.component').then((c) => c.MyBetsComponent),
      // },
      // {
      //   path: 'casino/my-bets',
      //   loadComponent: () =>
      //     import('./pages/my-bets/my-bets.component').then((c) => c.MyBetsComponent),
      // },
      // {
      //   path: 'sport/my-bets',
      //   loadComponent: () =>
      //     import('./pages/my-bets/my-bets.component').then((c) => c.MyBetsComponent),
      // },

      // {
      //   path:'sport',
      //   children:[
      //     {
      //       path: 'horse-racing',
      //       loadComponent: () =>
      //         import('./pages/horse-racing/horse-racing.component').then((c) => c.HorseRacingComponent),
      //     },
      //     {
      //       path: 'racing-market-detail',
      //       loadComponent: () => import('./pages/racing-market-details/racing-market-details.component').then((c) => c.RacingMarketDetailsComponent)
      //     },
      //     {
      //       path: 'soccer',
      //       loadComponent: () =>
      //         import('./pages/soccer/soccer.component').then((c) => c.SoccerComponent),
      //     },
      //     {
      //       path: 'soccer-details',
      //       loadComponent: () =>
      //         import('./pages/pal-ful/pal-ful.component').then((c) => c.PalFulComponent),
      //     },
      //     {
      //       path: 'all-tennis',
      //       loadComponent: () => import('./pages/all-tennis/all-tennis.component').then((c => c.AllTennisComponent))
      //     }
      //   ]
      // },
      // {
      //   path:'casino',
      //   children:[
      //     {
      //       path: 'providers',
      //       loadComponent: () =>
      //         import('./pages/providers/providers.component').then((c) => c.ProvidersComponent),
      //     },
      //   ]
      // },
      // {
      //   path:'promotions',
      //   loadComponent:()=> import ('./pages/promotions/promotions.component').then((c)=>c.PromotionsComponent)
      // },
      // {
      //   path: 'drake',
      //   loadComponent: () =>
      //     import('./pages/drake/drake.component').then((c) => c.DrakeComponent),
      // },
      // {
      //   path: 'team-f1',
      //   loadComponent: () => import('./pages/stake-team/team-f1/team-f1.component').then((c) => c.TeamF1Component)
      // },
      // {
      //   path: 'responsible-gambling',
      //   loadComponent: () =>
      //     import(
      //       './pages/responsible-gambling/responsible-gambling.component'
      //     ).then((c) => c.ResponsibleGamblingComponent),
      //   children: [
      //     {
      //       path: 'stake-smart',
      //       loadComponent: () =>
      //         import(
      //           './pages/stake-smart/stake-smart.component'
      //         ).then((c) => c.StakeSmartComponent),
      //     },
      //     {
      //       path: 'responsible-gambling-faqs',
      //       loadComponent: () =>
      //         import(
      //           './pages/responsible-gambling-faqs/responsible-gambling-faqs.component'
      //         ).then((c) => c.ResponsibleGamblingFaqsComponent),
      //     },
      //     {
      //       path: 'self-exclusion',
      //       loadComponent: () =>
      //         import(
      //           './pages/self-exclusion/self-exclusion.component'
      //         ).then((c) => c.SelfExclusionComponent),

      //     },
      //     {
      //       path: 'calculator',
      //       loadComponent: () =>
      //         import(
      //           './pages/calculator/calculator.component'
      //         ).then((c) => c.CalculatorComponent),
      //     },
      //   ],
      // },
      // {
      //   path: 'affiliate',
      //   loadComponent: () =>
      //     import(
      //       './pages/affiliate/affiliate.component'
      //     ).then((c) => c.AffiliateComponent),
      //   children: [
      //     {
      //       path: '',
      //       redirectTo: 'Overview',
      //       pathMatch: 'full',
      //     },

      //     {
      //       path: 'Overview',
      //       loadComponent: () =>
      //         import(
      //           './pages/affiliate-overview/affiliate-overview.component'
      //         ).then((c) => c.AffiliateOverviewComponent),

      //     },
      //     {
      //       path: 'retention',
      //       loadComponent: () =>
      //         import(
      //           './pages/retention-program/retention-program.component'
      //         ).then((c) => c.RetentionProgramComponent),
      //     },
      //     {
      //       path: 'commission',
      //       loadComponent: () =>
      //         import(
      //           './pages/commission/commission.component'
      //         ).then((c) => c.CommissionComponent),
      //     },
      //     {
      //       path: 'funds',
      //       loadComponent: () =>
      //         import(
      //           './pages/funds/funds.component'
      //         ).then((c) => c.FundsComponent),
      //     },
      //     {
      //       path: 'referred-users',
      //       loadComponent: () =>
      //         import(
      //           './pages/referred-users/referred-users.component'
      //         ).then((c) => c.ReferredUsersComponent),
      //     },
      //     {
      //       path: 'campaigns',
      //       loadComponent: () =>
      //         import(
      //           './pages/campaigns/campaigns.component'
      //         ).then((c) => c.CampaignsComponent),
      //     },
      //   ],
      // },
      // {
      //   path: 'transactions',
      //   loadComponent: () =>
      //     import(
      //       './pages/transactions/transactions.component'
      //     ).then((c) => c.TransactionsComponent),
      //   children: [
      //     {
      //       path: '',
      //       redirectTo: 'deposits',
      //       pathMatch: 'full',
      //     },
      //     {
      //       path: 'deposits',
      //       loadComponent: () =>
      //         import(
      //           './pages/deposits/deposits.component'
      //         ).then((c) => c.DepositsComponent),
      //     },
      //     {
      //       path: 'withdrawal',
      //       loadComponent: () =>
      //         import(
      //           './pages/withdrawal/withdrawal.component'
      //         ).then((c) => c.WithdrawalComponent),
      //     },
      //     {
      //       path: 'archive',
      //       loadComponent: () =>
      //         import(
      //           './pages/archive/archive.component'
      //         ).then((c) => c.ArchiveComponent),
      //     },
      //      {
      //       path: 'other',
      //       loadComponent: () =>
      //         import(
      //           './pages/others/others.component'
      //         ).then((c) => c.OthersComponent),
      //     },

      //   ],
      // },


      // {
      //   path: 'setting',
      //   loadComponent: () =>
      //     import('./modal/settings-modals/settings/settings.component').then((c) => c.SettingsComponent),
      // },
      // {
      //   path: 'blog',
      //   loadComponent: () =>
      //     import('./pages/blog-page/blog-page.component').then((c) => c.BlogPageComponent),
      // },
      // {
      //   path: 'vip-club',
      //   loadComponent: () =>
      //     import('./pages/vip-cloud/vip-cloud.component').then((c) => c.VipCloudComponent),
      // },
      // {
      //   path: 'stake-offer',
      //   loadComponent: () =>
      //     import('./pages/stake-offer/stake-offer.component').then((c) => c.StakeOfferComponent),
      // },

      // {
      //   path: 'chat',
      //   loadComponent: () =>
      //     import('./pages/chat/chat.component').then((c) => c.ChatComponent),
      // },

    ],
  },

  // {
  //   path: 'vault',
  //   component: VaultComponent,
  // },

  // {
  //   path: 'vip',
  //   component: VipComponent,
  // },
  // {
  //   path: 'login',
  //   component: RegisterComponent,
  // },
  // {
  //   path: 'statistics',
  //   component: StatisticsComponent,
  // },
  // {
  //   path: 'notification',
  //   component: NotificationComponent,
  // },
  // {
  //   path: 'vip-club',
  //   loadComponent: () => import('./pages/vip-cloud/vip-cloud.component').then((c => c.VipCloudComponent))
  // },

  // {
  //   path: 'stake-race',
  //   loadComponent: () => import('./pages/stake-race/stake-race.component').then((c) => c.StakeRaceComponent)
  // },

  {
    path: '**',
    redirectTo: '',
  },
];
