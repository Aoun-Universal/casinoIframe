import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-withdrawal',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './withdrawal.component.html',
  styleUrl: './withdrawal.component.css'
})
export class WithdrawalComponent {
  tabs = ['Crypto', 'Local Currency'];
  selectedTab = 0; // Default tab index

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
