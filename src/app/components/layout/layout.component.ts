import { Component, OnInit } from '@angular/core';
import { ConditionHandlerService } from '../../services/condition-handler.service';
import { NavigationEnd, Router } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../shared/header/header.component";
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ContentComponent, SidebarComponent, FooterComponent, CommonModule, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'] 
})
export class LayoutComponent  {
  currentRoute: string = '';  
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
      console.log(this.currentRoute); 
    });
  }

}
