import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

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

  // Close Betslip
  showModal: boolean = false;
  constructor(private toggleService: ToggleService) {}
  ngOnInit(): void {
    this.toggleService.getBetslipState().subscribe(value => {
      this.showModal = value;
    });
  }
  closeModal() {
    this.toggleService.setBetslipstate(false);
  }
}
