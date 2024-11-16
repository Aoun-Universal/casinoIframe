import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-racing-market-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './racing-market-details.component.html',
  styleUrl: './racing-market-details.component.css'
})
export class RacingMarketDetailsComponent {
  activeTab: number = 1;
  isFluctuationVisible = false; // Initially hidden
  isMarketOpen = true;
  isMarketDetailOpen = true;
  WinnerDropdown = false;
  isTabsData = false;
  isArrowUpSelected: boolean = true; // Default to up arrow
  isArrowWinSelected: boolean = true;
  toggleArrow() {
    this.isArrowUpSelected = !this.isArrowUpSelected;
  }
  toggleArrowWin() {
    this.isArrowWinSelected = !this.isArrowWinSelected;
  }


  toggleDropdown() {
    this.WinnerDropdown = !this.WinnerDropdown;
  }


  toggleTabs() {
    this.isTabsData = !this.isTabsData;
  }
  toggleVisibility() {
    this.isFluctuationVisible = !this.isFluctuationVisible;
  }
   // Tabs
   setActiveTab(tabIndex: number): void {
    this.activeTab = tabIndex;
  }

  // Market 1
  toggleMarket() {
    this.isMarketOpen = !this.isMarketOpen;
  }
   // Market 2
   toggleMarketDetail() {
    this.isMarketDetailOpen = !this.isMarketDetailOpen;
  }

}
