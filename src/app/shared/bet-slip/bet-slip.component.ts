import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bet-slip',
  standalone: true,
  imports: [NgIf],
  templateUrl: './bet-slip.component.html',
  styleUrl: './bet-slip.component.css'
})
export class BetSlipComponent {
  WinnerDropdown=false;
  toggleDropdown() {
    this.WinnerDropdown = !this.WinnerDropdown;
  }

  // Odds dropdown
  OddsDropdown=false;
  toggleOddsDropdown() {
    this.OddsDropdown = !this.OddsDropdown;
  }
}
