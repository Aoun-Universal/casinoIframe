import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CONFIG } from '../../config';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit{
  title = 'Universe Casino';

  constructor(private mainService:MainService){

  }
  ngOnInit(): void {
    this.getBanners();
  }

  getBanners() {
    this.mainService.getDataFromServices(CONFIG.bannersList, CONFIG.bannersListTime, { key: CONFIG.siteKey }).subscribe((data: any) => {
      this.mainService.setBannersList(data.data);
    });
  }
}
