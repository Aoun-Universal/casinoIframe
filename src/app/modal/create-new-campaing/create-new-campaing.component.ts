import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';
import { NgClass, NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-create-new-campaing',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './create-new-campaing.component.html',
  styleUrl: './create-new-campaing.component.css'
})
export class CreateNewCampaingComponent {


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



  constructor(private toggle: ToggleService) { }
  closeCampaing() {
    this.toggle.setcampaingModalState(false);
  }
}
