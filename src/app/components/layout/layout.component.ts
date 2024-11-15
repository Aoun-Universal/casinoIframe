import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../shared/header/header.component";
import { filter } from 'rxjs';
import { MobileNavigationComponent } from "../../shared/mobile-navigation/mobile-navigation.component";
import { ToggleService } from '../../services/toggle.service';
import { BetSlipComponent } from '../../shared/bet-slip/bet-slip.component';
import { VaultComponent } from "../../modal/vault/vault.component";
import { VipComponent } from "../../modal/vip/vip.component";
import { StatisticsComponent } from "../../modal/statistics/statistics.component";
import { NotificationComponent } from "../../modal/notification/notification.component";
import { StatisticsModalTableComponent } from "../../modal/statistics-modal-table/statistics-modal-table.component";
import { WalletModalComponent } from "../../modal/wallet-modal/wallet-modal.component";
import { SetupWalletComponent } from '../../modal/setup-wallet/setup-wallet.component';
import { CreateNewCampaingComponent } from "../../modal/create-new-campaing/create-new-campaing.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ContentComponent,
    SidebarComponent,
    FooterComponent,
    CommonModule,
    HeaderComponent,
    MobileNavigationComponent,
    BetSlipComponent,
    VaultComponent,
    VipComponent,
    StatisticsComponent,
    NotificationComponent,
    StatisticsModalTableComponent,
    WalletModalComponent,
    SetupWalletComponent, CreateNewCampaingComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  currentRoute: string = '';
  showBetslip: boolean = false;
  sidebarOpen: boolean = true;
  vaultModal: boolean = false;
  vipModal: boolean = false
  statisticModal: boolean = false
  statisticTableModal: boolean = false
  notificationState: boolean = false
  campaingState: boolean = false
  constructor(private router: Router, private toggle: ToggleService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }
  ngOnInit(): void {
    this.toggle.getSidebar().subscribe((state) => {
      this.sidebarOpen = state
    });
    this.toggle.getBetslipState().subscribe((state) => {
      this.showBetslip = state
    })
    this.toggle.getVaultModalState().subscribe((state) => {
      this.vaultModal = state
    })
    this.toggle.getVipModalState().subscribe((state) => {
      this.vipModal = state
    })
    this.toggle.getstatisticModalstate().subscribe((state) => {
      this.statisticModal = state
    })
    this.toggle.getstatisticsTableModalState().subscribe((state) => {
      this.statisticTableModal = state
    })
    this.toggle.getnotificationModalState().subscribe((state) => {
      this.notificationState = state
    })
    this.toggle.getCampaingModalState().subscribe((state) => {
      this.campaingState = state
    })
  }
}
