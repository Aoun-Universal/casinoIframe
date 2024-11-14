import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { VaultComponent } from "../../modal/vault/vault.component";
import { ToggleService } from '../../services/toggle.service';
import { TooltipComponent } from "../tooltip/tooltip.component";
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, VaultComponent, RouterLink, TooltipComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'] // Corrected from styleUrl to styleUrls
})
export class SidebarComponent implements OnInit {
  openBar: any;
  isSidebar = true
  isMobileSidebar = false;
  routerPath: any
  smScreen: boolean = false;
  xlScreen: boolean = true;

  constructor(private router: Router, private toggle: ToggleService, @Inject(DOCUMENT) private document: Document) { }
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

  @HostListener('window:resize')
  setSidebar() {
    const windowRef = this.document.defaultView;
    if (windowRef) {
      if (windowRef.innerWidth > 768) {
        this.smScreen = false;
        this.xlScreen = true;
      } else {
        this.smScreen = true;
        this.xlScreen = false;
      }
    }
  }

  ngOnInit(): void {
    // Subscribe to router events to track navigation end
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.routerPath = event.url; // Update the current path on navigation
      });
    this.routerPath = this.router.url;
    this.setSidebar()
    this.toggle.sidebarState$.subscribe((state) => {
      this.isSidebar = state
    })

  }
  toggleSidebar() {
    this.toggle.toggleSidebar()
  }
  openvaultModal() {
    this.toggle.setVaultModalState(true);
  }
  openvipModal() {
    this.toggle.setVipModalState(true);
  }
  openstatisticModal() {
    this.toggle.setstatisticModal(true)
  }
  opennotificationModal() {
    this.toggle.setnotificationModal(true)
  }
}
