import { Component, ElementRef, HostListener } from '@angular/core';
import { StakeSmartComponent } from '../stake-smart/stake-smart.component';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-responsible-gambling',
  standalone: true,
  imports: [StakeSmartComponent, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './responsible-gambling.component.html',
  styleUrl: './responsible-gambling.component.css'
})
export class ResponsibleGamblingComponent {
  routerPath: any
  constructor(private router: Router,private eRef: ElementRef,) { }
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.routerPath = event.url;
        console.log('url');
      });
    this.routerPath = this.router.url;

// Subscribe to router events to update the dash position on route change
this.routerSubscription = this.router.events.subscribe((event) => {
  if (event instanceof NavigationEnd) {
    this.updateDashPosition();
  }
});

// Initialize the dash position
this.updateDashPosition();

  }
  WinnerDropdown = false; // Initially hidden
  toggleDropdown() {
    this.WinnerDropdown = !this.WinnerDropdown;
  }
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.WinnerDropdown = false;
    }}


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
  
    // constructor(private router: Router) {}
  
   
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
