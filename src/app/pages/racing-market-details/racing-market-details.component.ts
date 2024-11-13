import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-racing-market-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './racing-market-details.component.html',
  styleUrl: './racing-market-details.component.css'
})
export class RacingMarketDetailsComponent {
  activeTab: number = 1;
  isFluctuationVisible = false; // Initially hidden
  isMarketOpen = true;


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
}
