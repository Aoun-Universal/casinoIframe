import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  openBar: any;
  routerPath:any
  constructor(private router:Router){}
  toggleOpen(name: string) {
    // Check if the bar is already open with the same name
    if (this.openBar === name) {
      // If it is, close it by resetting openBar to an empty string
      this.openBar = '';
    } else {
      // If it's not, open the bar by setting openBar to the new name
      this.openBar = name;
    }
  }
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.routerPath = event.url;
         
      });


    this.routerPath = this.router.url;
  }
}
