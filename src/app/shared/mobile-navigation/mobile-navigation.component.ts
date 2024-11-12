import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ToggleService} from '../../services/toggle.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mobile-navigation',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.css'
})

export class MobileNavigationComponent implements OnInit {
 constructor(private router: Router, private toggle: ToggleService) {
  }
  isSidebar = false;
  isBetslip = false;
  buttons = [
    {
      text: 'Browse',
      clickFunction: this.toggleSidebar.bind(this),
      svgPath: 'M0 0h23.867c-3.947 3.173-7.014 7.333-8.827 12.107H0V0Zm0 51.867h41.707v12.106H0V51.867Zm13.36-25.92H0v12.106h17.867a28.537 28.537 0 0 1-4.48-12.106h-.027ZM57.014 38.32l6.987 10.96-8.08 5.173-7.12-11.146c-2.24.773-4.64 1.2-7.12 1.2-12.24 0-22.187-9.947-22.187-22.187 0-12.24 9.947-22.187 22.187-22.187 12.24 0 22.187 9.947 22.187 22.187 0 6.293-2.64 11.947-6.854 16ZM41.681 9.733c-6.933 0-12.587 5.654-12.587 12.587s5.654 12.587 12.587 12.587 12.587-5.654 12.587-12.587S48.614 9.733 41.68 9.733Z',
    },
    {
      text: 'Casino',
      clickFunction: this.toggleSidebar.bind(this),
      svgPath: 'M12.265 47.726.21 14.603a3.574 3.574 0 0 1 2.108-4.553l.024-.007 19.282-7.015a3.55 3.55 0 0 1 4.553 2.082l.008.024.694 1.92L12.69 46.073a8.9 8.9 0 0 0-.418 1.598l-.008.056ZM63.79 15.511 48.002 58.93a3.529 3.529 0 0 1-4.558 2.1l.024.009-21.948-8.001a3.58 3.58 0 0 1-2.124-4.585l-.008.024 15.787-43.39a3.555 3.555 0 0 1 4.559-2.126l-.024-.008 21.948 8a3.58 3.58 0 0 1 2.124 4.585l.008-.024v-.002ZM50.457 32.685l-1.386-3.254a1.789 1.789 0 0 0-2.333-.956l.012-.004-2.666 1.174a1.787 1.787 0 0 1-2.316-.948l-.004-.012-1.146-2.667a1.764 1.764 0 0 0-2.332-.93l.012-.004-3.28 1.386a1.738 1.738 0 0 0-.929 2.33l-.004-.01 3.92 9.255a1.816 1.816 0 0 0 2.359.928l-.012.005 9.227-3.947a1.737 1.737 0 0 0 .794-2.356l.004.01h.08Z',
    },
    {
      text: 'Bet Slip',
      clickFunction: this.toggleBetslip.bind(this),
      svgPath: 'M.001 3.549v7.12h7.12v49.786h6.214c.778-3.122 3.556-5.398 6.866-5.398a7.07 7.07 0 0 1 6.856 5.348l.01.048h9.974c.778-3.122 3.556-5.398 6.866-5.398a7.07 7.07 0 0 1 6.856 5.348l.01.048h6.16V10.665h7.066v-7.12L.001 3.549Zm35.546 37.334h-17.76v-5.334h17.76v5.334Zm10.668-14.214H17.789v-5.334h28.426v5.334Z',
    },
    {
      text: 'Sports',
      clickFunction: this.toggleSidebar.bind(this),
      svgPath: 'M14.287 13.917c16.599 6.854 30.869 15.965 43.231 27.143l-.001.002.126.11-.125-.112C64.262 31 65.501 17.31 60.63 1.865 56.773.739 52.34.092 47.758.092c-13.046 0-24.87 5.249-33.47 13.748v.077Zm79.997 46.514a46.803 46.803 0 0 1-7.907 15.996v-.003c-2.275-3.87-4.709-7.622-7.185-11.295l-.137.08c4.463-2.823 9.63-4.63 15.307-5.11l-.078.332Z',
    },
    {
      text: 'Chat',
      clickFunction: this.toggleSidebar.bind(this),
      svgPath: 'M32 1.916c-.288-.01-.628-.016-.97-.016C14.254 1.9.586 15.206.002 31.84L0 31.894A28.655 28.655 0 0 0 7.476 51.15l-.02-.024c-.688 4.028-1.89 7.636-3.552 10.974l.102-.228c4.634-.396 8.878-1.73 12.654-3.81l-.164.082c4.474 2.35 9.774 3.728 15.398 3.728h.112H32c.3.01.654.016 1.008.016 16.768 0 30.428-13.31 30.99-29.942l.002-.052C63.414 15.206 49.746 1.902 32.97 1.902c-.342 0-.68.006-1.018.016l.05-.002H32ZM16.138 37.604a5.948 5.948 0 1 1 0-11.896 5.948 5.948 0 0 1 0 11.896Zm15.862 0a5.948 5.948 0 1 1 0-11.896 5.948 5.948 0 0 1 0 11.896Zm15.862 0a5.948 5.948 0 1 1 0-11.896 5.948 5.948 0 0 1 0 11.896Z',
    },
  ];


  ngOnInit(): void {
    this.toggle.getSidebar().subscribe((value: boolean) => {
      this.isSidebar = value;
    });
  
    this.toggle.getBetslipState().subscribe((value: boolean) => {
      this.isBetslip = value;
    });
  }

  toggleSidebar() {
    this.toggle.setSidebar(!this.isSidebar)
    console.log(this.isSidebar);
  }

  toggleBetslip() {
    this.toggle.setBetslipstate(!this.isBetslip)
    console.log("betslip" , this.isBetslip);
  }


}
