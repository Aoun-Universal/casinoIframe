import { ChangeDetectorRef, Component, ElementRef, HostListener } from '@angular/core';
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
  constructor(private router: Router,private eRef: ElementRef, private cdRef: ChangeDetectorRef) { }
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
    this.updateDashPosition();

    // Subscribe to router events to detect route changes
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateDashPosition();
      }
    });

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
      { path: '/responsible-gambling/stake-smart', label: 'Stake Smart' },
      { path: '/responsible-gambling/responsible-gambling-faqs', label: 'Responsible Gambling FAQs' },
      { path: '/responsible-gambling/stake-smart', label: 'Recognise the sign' },
      { path:'/responsible-gambling/responsible-gambling-faqs', label: 'Self Assessment' },
      { path: '/responsible-gambling/self-exclusion', label: 'Self Exclusion' },
      { path: '/responsible-gambling/calculator', label: 'Budget Calculator' }
    ];
  
    activeIndex = 0;
  private routerSubscription: Subscription | null = null;
  
   
    ngOnDestroy(): void {
      // Unsubscribe to prevent memory leaks
      if (this.routerSubscription) {
        this.routerSubscription.unsubscribe();
      }
    }
  
    // Method to set the active index based on the current route
    updateDashPosition(): void {
      const currentRoute = this.router.url;
      const index = this.routes.findIndex(route => route.path === currentRoute);
  
      // Set activeIndex only if a matching route is found
      this.activeIndex = index >= 0 ? index : 0; // Default to the first route if not found
      this.cdRef.detectChanges(); // Ensure view update
    }
  
    // Check if a route is active
    isActive(path: string): boolean {
      return this.router.url === path;
    }
  
    // Method to manually set active index on click
    setActiveIndex(index: number): void {
      this.activeIndex = index;
      this.cdRef.detectChanges();
    }
}
