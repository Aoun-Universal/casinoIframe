import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-affiliate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './affiliate.component.html',
  styleUrl: './affiliate.component.css'
})
export class AffiliateComponent {
  WinnerDropdown=false;
  toggleDropdown() {
    this.WinnerDropdown = !this.WinnerDropdown;
  }
}
