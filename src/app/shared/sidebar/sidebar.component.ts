import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  openBar: any;
  routerPath:any
  constructor(private router:Router){}
  toggleOpen(name: string) {
  
    if (this.openBar === name) {
      this.openBar = '';
    } else {
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
