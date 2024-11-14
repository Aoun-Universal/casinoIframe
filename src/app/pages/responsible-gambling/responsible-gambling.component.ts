import { Component, ElementRef, HostListener } from '@angular/core';
import { StakeSmartComponent } from '../stake-smart/stake-smart.component';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
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
  constructor(private router: Router,private eRef: ElementRef) { }
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
}
