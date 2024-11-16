import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-others',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './others.component.html',
  styleUrl: './others.component.css'
})
export class OthersComponent {
  tabs = ['All', 'Bonus','Drop','Campaign Withdrawal','Reload Claim', 'Race Payout' , 'Rains Sent', 'Rakeback Received','Sportsbook Promotion Payout','Tips Received' , 'Vault Deposit', 'Vault Withdrawal'];
  selectedTab = 0; // Default tab index

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
