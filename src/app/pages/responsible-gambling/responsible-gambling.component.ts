import { Component } from '@angular/core';
import { StakeSmartComponent } from '../stake-smart/stake-smart.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-responsible-gambling',
  standalone: true,
  imports: [StakeSmartComponent],
  templateUrl: './responsible-gambling.component.html',
  styleUrl: './responsible-gambling.component.css'
})
export class ResponsibleGamblingComponent {
  routerPath: any
  constructor(private router: Router, ) { }
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
