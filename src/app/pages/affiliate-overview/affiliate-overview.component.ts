import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-affiliate-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './affiliate-overview.component.html',
  styleUrl: './affiliate-overview.component.css'
})
export class AffiliateOverviewComponent {
  WinnerDropdown=false;
  toggleDropdown() {
    this.WinnerDropdown = !this.WinnerDropdown;
  }
}
