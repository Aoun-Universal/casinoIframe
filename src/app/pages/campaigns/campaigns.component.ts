import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css'
})
export class CampaignsComponent {
  isOpen = false;

  toggleContent() {
    this.isOpen = !this.isOpen;
  }

  constructor(private toggle: ToggleService) { }

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

  openCampingModal() {
    this.toggle.setcampaingModalState(true);
  }
}
