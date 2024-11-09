import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ContentComponent} from '../content/content.component';
import {SidebarComponent} from '../../shared/sidebar/sidebar.component';
import {FooterComponent} from '../../shared/footer/footer.component';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "../../shared/header/header.component";
import {filter} from 'rxjs';
import {MobileNavigationComponent} from "../../shared/mobile-navigation/mobile-navigation.component";
import { ToggleService } from '../../services/toggle.service';
import { BetSlipComponent } from '../../shared/bet-slip/bet-slip.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ContentComponent, SidebarComponent, FooterComponent, CommonModule, HeaderComponent, MobileNavigationComponent, BetSlipComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  currentRoute: string = '';
  sidebarOpen:boolean=true;
  constructor(private router: Router, private toggle:ToggleService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }
  ngOnInit(): void {
    this.toggle.getSidebar().subscribe((state)=>{
      this.sidebarOpen=state
    })
  }
}
