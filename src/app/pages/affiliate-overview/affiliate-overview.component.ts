import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-affiliate-overview',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './affiliate-overview.component.html',
  styleUrl: './affiliate-overview.component.css'
})
export class AffiliateOverviewComponent {
  WinnerDropdown=false;
  toggleDropdown() {
    this.WinnerDropdown = !this.WinnerDropdown;
  }

  referralLink: string = 'https://example.com/referral'; // Default value
  isCopied: boolean = false; // Tooltip visibility flag

  // Copy the input field value
  copyReferralLink() {
    const inputElement = document.createElement('input');
    inputElement.value = this.referralLink;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);

    // Show the tooltip
    this.isCopied = true;

    // Hide the tooltip after 2 seconds
    setTimeout(() => {
      this.isCopied = false;
    }, 2000);
  }
}
