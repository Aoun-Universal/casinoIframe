import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { VaultComponent } from "../../modal/vault/vault.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, VaultComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'] // Corrected from styleUrl to styleUrls
})
export class SidebarComponent implements OnInit {
  openBar: any;
  routerPath: any;
  modalOpen=false
  constructor(private router: Router) {}

  toggleOpen(name: string) {
    // Toggle the open bar based on the passed name
    if (this.openBar === name) {
      this.openBar = ''; // Close if already open
    } else {
      this.openBar = name; // Open the specified bar
    }
  }

  ngOnInit(): void {
    // Subscribe to router events to track navigation end
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.routerPath = event.url; // Update the current path on navigation
      });

    // Initialize routerPath with the current URL on component load
    this.routerPath = this.router.url;
  }
  
  modalfunc(){
    this.modalOpen=true
  }
}
