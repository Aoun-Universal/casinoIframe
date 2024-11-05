import { Component } from '@angular/core';
import { ConditionHandlerService } from '../../services/condition-handler.service';
import { Router } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ContentComponent,SidebarComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'] // fixed typo here: styleUrls instead of styleUrl
})
export class LayoutComponent {
  currentRoute: any;
  getCurrentRoutePath$: any;

  constructor(
    private conConditionhandlerServicedtion: ConditionHandlerService,
    public router: Router
  ) {
    // Initialize the observable after the service is available
    this.getCurrentRoutePath$ = this.conConditionhandlerServicedtion.getCurrentRoutePath();

    this.getCurrentRoutePath$.subscribe((resp: any) => {
      this.currentRoute = resp;
    });
  }
}
