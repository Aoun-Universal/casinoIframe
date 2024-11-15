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
this.routerSubscription = this.router.events.subscribe(() => {
  this.updateDashPosition();
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
      { path: '/responsible-gambling/commission', label: 'Recognise the sign' },
      { path: '/responsible-gambling/', label: 'Self Assessment' },
      { path: '/responsible-gambling/self-exclusion', label: 'Self Exclusion' },
      { path: '/responsible-gambling/calculator', label: 'Budget Calculator' }
    ];
  
    activeIndex = 0;
    private routerSubscription: Subscription | null = null;
  
   
  
   
  
    ngOnDestroy(): void {
      if (this.routerSubscription) {
        this.routerSubscription.unsubscribe();
      }
    }
  
    setActiveIndex(index: number): void {
      this.activeIndex = index;
    }
  
    updateDashPosition(): void {
      const currentRoute = this.router.url;
      this.activeIndex = this.routes.findIndex(route => route.path === currentRoute);
    }


}
