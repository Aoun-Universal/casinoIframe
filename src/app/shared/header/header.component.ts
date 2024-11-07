import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDropdownOpen = false;
  porfileDropOpen=false;
  massageDropOpen=false;
  bellDropOpen=false;
  closeDropdown() {
    this.bellDropOpen = false;
  }
  toggleDropdown(dropdownType: string) {
    if (dropdownType === 'isDropdownOpen' && this.isDropdownOpen) {
      this.isDropdownOpen = false;
    } else if (dropdownType === 'porfileDropOpen' && this.porfileDropOpen) {
      this.porfileDropOpen = false;
    } else if (dropdownType === 'massageDropOpen' && this.massageDropOpen) {
      this.massageDropOpen = false;
    } else if (dropdownType === 'bellDropOpen' && this.bellDropOpen) {
      this.bellDropOpen = false;
    } 
    else {
      this.isDropdownOpen = dropdownType === 'isDropdownOpen';
      this.porfileDropOpen = dropdownType === 'porfileDropOpen';
      this.massageDropOpen = dropdownType === 'massageDropOpen';
      this.bellDropOpen = dropdownType === 'bellDropOpen';
    }
  }

  
  currencies = [
    { value: '0.00000000', symbol: 'BTC', imageUrl: '/assets/header/bit.png' },
    { value: '0.00000000', symbol: 'ETH', imageUrl: '/assets/header/bit.png' },
    { value: '0.00000000', symbol: 'ETH', imageUrl: '/assets/header/bit.png' },
    { value: '0.00000000', symbol: 'ETH', imageUrl: '/assets/header/bit.png' },
    { value: '0.00000000', symbol: 'ETH', imageUrl: '/assets/header/bit.png' },
    { value: '0.00000000', symbol: 'ETH', imageUrl: '/assets/header/bit.png' },
    { value: '0.00000000', symbol: 'ETH', imageUrl: '/assets/header/bit.png' },
    { value: '0.00000000', symbol: 'ETH', imageUrl: '/assets/header/bit.png' },
    { value: '0.00000000', symbol: 'ETH', imageUrl: '/assets/header/bit.png' },
    { value: '0.00000000', symbol: 'ETH', imageUrl: '/assets/header/bit.png' },
    { value: '0.00000000', symbol: 'ETH', imageUrl: '/assets/header/bit.png' },
    { value: '0.00000000', symbol: 'ETH', imageUrl: '/assets/header/bit.png' },
    { value: '0.00000000', symbol: 'ETH', imageUrl: '/assets/header/bit.png' },

  ];


  profileOptions = [
    { label: 'Wallet', icon: '/assets/header/wallet.png', type: 'button' },
    { label: 'Vault', icon: '/assets/header/valut.png', type: 'button' },
    { label: 'VIP', icon: '/assets/header/vip.png', type: 'button' },
    { label: 'Affiliate', icon: '/assets/header/Affiliate.png', type: 'button'},
    { label: 'Statistics', icon: '/assets/header/Statistics.png', type: 'button' },
    { label: 'Transactions', icon: '/assets/header/Transactions.png', type: 'button' },
    { label: 'My Bets', icon: '/assets/header/My Bets.png', type: 'button' },
    { label: 'Settings', icon: '/assets/header/setting.png', type: 'button' },
    { label: 'Stake Smart', icon: '/assets/header/Stake Smart.png', type: 'button' },
    { label: 'Live support', icon: '/assets/header/Live support.png', type: 'button' },
    { label: 'Logout', icon: '/assets/header/logout.png', type: 'button' }
  ];
  
  
}
