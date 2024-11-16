import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TabSliderComponent } from "../../shared/tab-slider/tab-slider.component";
import { ToastrModule, ToastrService,RouterLink } from 'ngx-toastr';

@Component({
  selector: 'app-my-bets',
  standalone: true,
  imports: [CommonModule, TabSliderComponent, ToastrModule,RouterLink],
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
    this.toastr.success('This is a success message!', 'Title', {
      positionClass: 'custom-toast-top-left',
      progressBar:true
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
}
