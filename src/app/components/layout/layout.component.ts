import { Component } from '@angular/core';
import { ConditionHandlerService } from '../../services/condition-handler.service';
import { Router } from '@angular/router';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  currentRoute: any;
  // getCurrentRoutePath$ = this.conConditionhandlerServicedtion.getCurrentRoutePath();
  constructor(private conConditionhandlerServicedtion: ConditionHandlerService, public router: Router) {
    // this.getCurrentRoutePath$.subscribe((resp: any) => {
    //   this.currentRoute = resp

    // })
  }
  
}
