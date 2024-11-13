import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-affiliate',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './affiliate.component.html',
  styleUrl: './affiliate.component.css'
})
export class AffiliateComponent {
  WinnerDropdown=false;
  toggleDropdown() {
    this.WinnerDropdown = !this.WinnerDropdown;
  }
}
