import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { LoginComponent } from '../../modal/login/login.component';
import { ToggleService } from '../../services/toggle.service';
import { RegisterComponent } from '../../modal/register/register.component';
import { AuthService } from '../../services/auth.service';
import { LogoutComponent } from '../../modal/logout/logout.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LoginComponent, RegisterComponent, LogoutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isDropdownOpen = false;
  token: any
  porfileDropOpen = false;
  massageDropOpen = false;
  bellDropOpen = false;
  searchbutton = false;
  cosinoDropOpen = false;
  constructor(private toggle: ToggleService, private authService: AuthService) { }
  closeDropdown() {
    this.bellDropOpen = false;
    this.searchbutton = false;

  }

  // Toggle dropdown (one at a time)
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
    else if (dropdownType === 'searchbutton' && this.searchbutton) {
      this.searchbutton = false;
    }

    else {
      this.isDropdownOpen = dropdownType === 'isDropdownOpen';
      this.porfileDropOpen = dropdownType === 'porfileDropOpen';
      this.massageDropOpen = dropdownType === 'massageDropOpen';
      this.bellDropOpen = dropdownType === 'bellDropOpen';
      this.searchbutton = dropdownType === 'searchbutton';


    }
  }

  CosinDropdown() {
    this.cosinoDropOpen = !this.cosinoDropOpen;
  }

  ngOnInit(): void {
    this.token = this.authService.isAuthenticated()

  }


  showLogin() {
    this.toggle.setLogin(true)
  }

  showSignUp() {
    this.toggle.setSignUp(true)
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
    { label: 'Affiliate', icon: '/assets/header/Affiliate.png', type: 'button' },
    { label: 'Statistics', icon: '/assets/header/Statistics.png', type: 'button' },
    { label: 'Transactions', icon: '/assets/header/Transactions.png', type: 'button' },
    { label: 'My Bets', icon: '/assets/header/My Bets.png', type: 'button' },
    { label: 'Settings', icon: '/assets/header/setting.png', type: 'button' },
    { label: 'Stake Smart', icon: '/assets/header/Stake Smart.png', type: 'button' },
    { label: 'Live support', icon: '/assets/header/Live support.png', type: 'button' },
    { label: 'Logout', icon: '/assets/header/logout.png', type: 'button' }
  ];


  showModal(index: any) {
    const currentIndex = index
    if (currentIndex === 10) {
      this.toggle.setLogout(true);
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const dropdowns = document.querySelectorAll('.close-dropdown');
    let isInsideDropdown = false;

    dropdowns.forEach(dropdown => {
      if (dropdown.contains(event.target as Node)) {
        isInsideDropdown = true;
      }
    });

    if (!isInsideDropdown) {
      this.massageDropOpen = false;
      this.porfileDropOpen = false
      this.isDropdownOpen = false;
      this.bellDropOpen = false;
    }
  }


}
