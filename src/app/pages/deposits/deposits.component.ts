import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-deposits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deposits.component.html',
  styleUrl: './deposits.component.css'
})
export class DepositsComponent {
  tabs = ['Crypto', 'Local Currency'];
  selectedTab = 0; // Default tab index

  selectTab(index: number) {
    this.selectedTab = index;
  }

}
