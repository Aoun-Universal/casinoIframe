import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
@Component({
  selector: 'app-horse-racing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horse-racing.component.html',
  styleUrl: './horse-racing.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HorseRacingComponent implements AfterViewInit {
  @ViewChild('marketCards') horseRaceMarket!: ElementRef<SwiperContainer>;
  tabKey:string='friday'
  accIsOpen:boolean=true
  ngAfterViewInit(): void {
    Object.assign(this.horseRaceMarket, this.racingMarketConfig)
    // @ts-ignore
    this.horseRaceMarket.nativeElement.initialize();
  }
  
  public racingMarketConfig: SwiperOptions = {
    autoplay:false,
    loop:false,
    slidesPerView: 1, 
    spaceBetween: 30,
    allowTouchMove: true,
    breakpoints: {
      320: {                  
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {                
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1024: {                   
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  };

  onTabClick(key:string){
    if(key){
      this.tabKey=key
    }
  }
  onAllRaceAccClick(){
    this.accIsOpen=!this.accIsOpen
  }
  // allRacesMarketData=[
  //   {
  //     marketName:'Australia',
  //     players:[
  //       {
  //         playerIcon:'',
  //         playerName:'R12 Kasamatsu',
  //         status:''
  //       },
  //     ]
  //   }
  // ]
}
