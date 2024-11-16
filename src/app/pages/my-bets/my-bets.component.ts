import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TabSliderComponent } from "../../shared/tab-slider/tab-slider.component";
import { ToastrModule, ToastrService, } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-bets',
  standalone: true,
  imports: [CommonModule, TabSliderComponent, ToastrModule, RouterLink],
  templateUrl: './my-bets.component.html',
  styleUrl: './my-bets.component.css'
})
export class MyBetsComponent {
  activeTb: string = 'casino';
  openModal: boolean = false
  activeTab: number = 1;
  LiveTab = 'basketball';
  TableTab: number = 1;
  dropdown: boolean = false
  tabDropdown: string = 'active'

  constructor(private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Your bets are now hidden.', 'Ghost Mode', {
      positionClass: 'custom-toast-top-left',
      progressBar: true,
      timeOut: 3000,
      closeButton: true
    });
  }

  openDropdown(tab: string) {
    this.tabDropdown = tab
    this.dropdown = !this.dropdown
  }
  openmenuModal(): void {
    this.openModal = !this.openModal
  }
  setActivTab(tab: string): void {
    this.activeTb = tab; // Update active tab on click
  }
  // Tabs
  setActiveTab(tabIndex: number): void {
    this.activeTab = tabIndex;
  }

  // Tabs
  setActiveTableTab(tabIndex: number): void {
    this.TableTab = tabIndex;
  }

  // Table Tabs
  setLiveTabActive(tab: string) {
    this.LiveTab = tab;
  }


  tabsItem = [
    { tabTitle: 'All Bets', dotState: false },
    { tabTitle: 'High Rollers', dotState: false },
    { tabTitle: 'Race Leaderboard', dotState: true },
  ]

  tabsItems = [
    { tabTitle: 'Casino', dotState: false },
    { tabTitle: 'Sports', dotState: false },

  ]

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const dropdowns = document.querySelectorAll('.close-dropdown');
    let isInsideDropdown = false;

    dropdowns.forEach(dropdown => {
      if (dropdown.contains(event.target as Node)) {
        isInsideDropdown = true;
      }
    });

    if (!isInsideDropdown) {
      this.dropdown = false
    }
  }
}
