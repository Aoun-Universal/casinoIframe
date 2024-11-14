import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

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

  routes = [
    { path: '/affiliate/Overview', label: 'Overview' },
    { path: '/affiliate/retention', label: 'Retention Program' },
    { path: '/affiliate/commission', label: 'Commission' },
    { path: '/affiliate/funds', label: 'Funds' },
    { path: '/affiliate/referred-users', label: 'Referred Users' },
    { path: '/affiliate/campaigns', label: 'Campaigns' },
  ];

  activeIndex = 0;
  private routerSubscription: Subscription | null = null; // Initialize with null

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to router events to update the dash position on route change
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateDashPosition();
      }
    });

    // Initialize the dash position
    this.updateDashPosition();
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // Method to set the active index based on the current route
  updateDashPosition() {
    const currentRoute = this.router.url;
    this.activeIndex = this.routes.findIndex(route => route.path === currentRoute);
  }

  // Check if a route is active
  isActive(path: string): boolean {
    return this.router.url === path;
  }
  
}
