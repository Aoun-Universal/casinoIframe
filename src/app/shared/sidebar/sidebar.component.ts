import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { VaultComponent } from "../../modal/vault/vault.component";
import { ToggleService } from '../../services/toggle.service';
import { TooltipComponent } from "../tooltip/tooltip.component";
import { RaceComponent } from '../../modal/race/race.component';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, VaultComponent, RouterLink, TooltipComponent, RaceComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'] // Corrected from styleUrl to styleUrls
})
export class SidebarComponent implements OnInit {
  openBar: any;
  currentRoute: any
  isSidebar = true
  selectedOption: any
  routerPath: any
  smScreen: boolean = false;

  constructor(private router: Router, private toggle: ToggleService, @Inject(DOCUMENT) private document: Document, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.routerPath = event.url || ''; // Ensure routerPath is always a string
      });
  }
  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
  isCasinoRoute(): boolean {
    return this.routerPath.startsWith('/casino/');
  }

  isSportRoute(): boolean {
    return this.routerPath.startsWith('/sport/');
  }

  toggleOpen(name: string) {
    if (this.openBar === name) {
      this.openBar = '';
    } else {
      this.openBar = name;
    }
    if (window.innerWidth >= 768) {
      this.toggle.setSidebar(true)
    }
  }

  closeSidebarMobile() {
    if (window.innerWidth <= 767) {
      this.toggle.setSidebar(true)
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.smScreen = window.innerWidth <= 768;
  }


  ngOnInit(): void {
    this.toggle.sidebarState$.subscribe((state) => {
      this.isSidebar = state
    })
    if (this.smScreen) {
      this.toggle.setSidebar(false)
    }
  }

  toggleSidebar() {
    this.toggle.toggleSidebar()
  }
  openvaultModal() {
    this.toggle.setVaultModalState(true);
    if (window.innerWidth <= 767) {
      this.toggle.setSidebar(true)
    }

  }
  openvipModal() {
    this.toggle.setVipModalState(true);
    if (window.innerWidth <= 767) {
      this.toggle.setSidebar(true)
    }
  }
  openstatisticModal() {
    this.toggle.setstatisticModal(true)
    if (window.innerWidth <= 767) {
      this.toggle.setSidebar(true)
    }
  }
  opennotificationModal() {
    this.toggle.setnotificationModal(true)
    if (window.innerWidth <= 767) {
      this.toggle.setSidebar(true)
    }
  }
  onWalletBtnClick() {
    this.toggle.setWalletModal(true)
    if (window.innerWidth <= 767) {
      this.toggle.setSidebar(true)
    }
  }
  openRaceModal() {
    this.toggle.setRaceModal(true);
    if (window.innerWidth <= 767) {
      this.toggle.setSidebar(true)
    }
  }
  options = [
    { id: 'decimal', value: 'decimal', label: 'Decimal' },
    { id: 'fractional', value: 'fractional', label: 'Fractional' },
    { id: 'american', value: 'american', label: 'American' },
    { id: 'indonesian', value: 'indonesian', label: 'Indonesian' },
    { id: 'hongkong', value: 'hongkong', label: 'Hong Kong' },
    { id: 'malaysian', value: 'malaysian', label: 'Malaysian' }
  ];

  selectOption(value: string) {
    this.selectedOption = value;
  }



}
