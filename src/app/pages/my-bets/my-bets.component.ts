import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-bets',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './my-bets.component.html',
  styleUrl: './my-bets.component.css'
})
export class MyBetsComponent {
  activeTb:string='casino';
  activeTab: number = 1;
  LiveTab = 'basketball'; 
  TableTab: number = 1;
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

}
