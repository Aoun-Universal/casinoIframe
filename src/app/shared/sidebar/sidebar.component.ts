import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  openBar: any;
  isSidebar = false
  routerPath:any
  constructor(private router:Router, private toggle:ToggleService){}
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
     this.toggle.getSidebar().subscribe((value:boolean)=>{
       this.isSidebar = value
     })
  }
  toggleSidebar(){
    this.toggle.setSidebar(!this.isSidebar)
  }
}
