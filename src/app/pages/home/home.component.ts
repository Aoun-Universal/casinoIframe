import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component ,CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, SlickCarouselModule,NgIf,NgClass,NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('topSportsSwiper') topSportsSwiper!: ElementRef<SwiperContainer>;

  isMarketOpen = true;
  isMarketOpen2 = true;
  activeTab: number = 1;
  LiveTab = 'basketball'; 
  TableTab: number = 1;
  // Winner Dropdown
  WinnerDropdown=false;
  toggleDropdown() {
    this.WinnerDropdown = !this.WinnerDropdown;
  }

  // Market 1
  toggleMarket() {
    this.isMarketOpen = !this.isMarketOpen;
  }
  
  toggleMarket2() {
    this.isMarketOpen2 = !this.isMarketOpen2;
  }

  // Tabs
  setActiveTab(tabIndex: number): void {
    this.activeTab = tabIndex;
  }

    // Tabs
    setActiveTableTab(tabIndex: number): void {
      this.TableTab = tabIndex;
    }

   // Table Tabs
   setLiveTabActive(tab: string) {
    this.LiveTab = tab;
  }

  slides = [
    {
      img: "/assets/home/1.avif",
      badge: "Promo",
      title: "Industry-Best Election Odds",
      description: "Bet With Stake Today.",
      buttonText: "View Market"
    },
    {
      img: "/assets/home/2.avif",
      badge: "Politics",
      title: "Live Betting During Election",
      description: "Plus Bingo Markets & More.",
      buttonText: "Bet Now"
    },
    {
      img: "/assets/home/3.webp",
      badge: "Promo",
      title: "Champions League",
      description: "Early Goal Payout.",
      buttonText: "Bet Now"
    },
    {
      img: "/assets/home/4.webp",
      badge: "Promo",
      title: "NBA - 3rd Quarter Payout",
      description: "Insurance For Bad Beats",
      buttonText: "View Matches"
    },
    {
      img: "/assets/home/5.webp",
      badge: "Promo",
      title: "WTA Finals ",
      description: "Final Set Tiebreaker Payout.",
      buttonText: "Bet Now"
    },
    {
      img: "/assets/home/6.webp",
      badge: "Promo",
      title: "NHL",
      description: "2+ Lead Payout",
      buttonText: "Bet Now"
    },

  ];


  sports = [
    { img: "https://mediumrare.imgix.net/politics-entertainment-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 1 },
    { img: "https://mediumrare.imgix.net/soccer-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 2 },
    { img: "https://mediumrare.imgix.net/tennis-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 3 },
    { img: "https://mediumrare.imgix.net/basketball-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 4 },
    { img: "https://mediumrare.imgix.net/cricket-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 5 },
    { img: "https://mediumrare.imgix.net/ice-hockey-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 6 },
    { img: "https://mediumrare.imgix.net/american-football-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 7 },
    { img: "https://mediumrare.imgix.net/racing-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 8 },
    { img: "https://mediumrare.imgix.net/dota-2-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 9 },
    { img: "https://mediumrare.imgix.net/counter-strike-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 10 },
    
  ];

  
  index = 0;

  // Swiper
  swiperConfig: SwiperOptions = {
    autoplay:false,
    loop:false,
    slidesPerView: 'auto', 
    spaceBetween: 30,
      allowTouchMove: true,
      touchRatio: 3,  
      touchAngle: 45,
      breakpoints: {
      320: {                  
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {                
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1024: {                   
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  };


  topSportsSwiperConfig: SwiperOptions = {
    autoplay:false,
    slidesPerView: 'auto',
  spaceBetween: 30,
    allowTouchMove: true,
    touchRatio: 3,    
    touchAngle: 45,
    breakpoints: {
      320: {                    
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {                   
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1024: {                   
        slidesPerView: 5,
        spaceBetween: 30,
      }
    }
  };

  ngAfterViewInit() {
    // Initialize each Swiper individually
    this.initSwiper(this.swiper, this.index);
    this.initSwiper(this.topSportsSwiper, 0);
  }

  private initSwiper(swiperElement: ElementRef<SwiperContainer>, initialIndex: number) {
    if (swiperElement.nativeElement.swiper) {
      swiperElement.nativeElement.swiper.activeIndex = initialIndex;

    }
  }

  // Swiper 1 Controls
  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }

  swipePrev() {
    this.swiper.nativeElement.swiper.slidePrev();
  }

  swipeNext() {
    this.swiper.nativeElement.swiper.slideNext();
  }

  // Top Sports Swiper Controls
  swipePrevTopSports() {
    this.topSportsSwiper.nativeElement.swiper.slidePrev();
  }

  swipeNextTopSports() {
    this.topSportsSwiper.nativeElement.swiper.slideNext();
  }

}