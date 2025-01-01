import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit, AfterViewInit {
  owlPrevBtn: boolean = true;
  owlNextBtn: boolean = false;

  isMarketOpen = true;
  isMarketOpen2 = true;
  currentRoute!: string;
  heroSlider!: Swiper;
  activeTab: number = 1;
  LiveTab = 'basketball';

  TableTab: number = 1;

  WinnerDropdown = false;
  heroCurrentSlideIndex = 0;
  heroSlideCount = 0;

  searchPlaceholder: string = '';

  swiperConfig: any;
  @ViewChild('swiperContainer', { static: true }) swiperContainer!: ElementRef;
  swiperBreakPoint = {
    slide: 7.5,
    space: 10,
  };

  heroSlides:any = [];

  isCarouselActive = true;
  screenWidth = window.innerWidth;
  subscription:any;
  // swiperInstance: Swiper;
  constructor(private router: Router, private activeRoute: ActivatedRoute,private mainService:MainService) {}

  ngOnInit() {
   this.subscription = this.mainService.getBannersList().subscribe((res:any)=>{
    if(res){
      this.heroSlides = res;
    }
    })
    const inner = window.innerWidth;
    if (inner <= 992 && inner >= 400) {
      this.swiperBreakPoint.slide = 4;
    } else if (inner <= 400) {
      this.swiperBreakPoint.slide = 3;
    }
  }

  isUserLoggedIn(): boolean {
    return true;
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    // this.checkCarousel();
  }

  ngAfterViewInit() {
    // this.checkCarousel();

    this.heroSlider = new Swiper('.hero-swiper', {
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      freeMode: true,
      spaceBetween: 16,
      speed: 800,
      navigation: {
        nextEl: '.myCarouselRight',
        prevEl: '.myCarouselLeft',
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      breakpoints: {
        300: {
          slidesPerView: 1.1,
          slidesPerGroup: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 16,
        },
      },
    });

    // this.stakeOrigin = new Swiper('.stake-swiper', {
    //   loop: false,
    //   slidesPerView: 7.5,
    //   slidesPerGroup: 6,
    //   freeMode: true,

    //   spaceBetween: 10,
    //   navigation: {
    //     nextEl: '.myCarouselRight',
    //     prevEl: '.myCarouselLeft',
    //   },
    //   breakpoints: {
    //     300: {
    //       slidesPerView: 3,
    //       slidesPerGroup: 3,
    //       spaceBetween: 6,

    //     },
    //     768: {
    //       slidesPerView: 4,
    //       slidesPerGroup: 3,
    //       spaceBetween: 6,

    //     },
    //     1024: {
    //       slidesPerView: 7.5,
    //       slidesPerGroup: 6,
    //       spaceBetween: 10,
    //     },
    //   },
    //   on: {
    //     slideChange: () => this.updateNavigationButtons(),
    //     reachBeginning: () => (this.owlPrevBtn = true),
    //     reachEnd: () => (this.owlNextBtn = true),
    //   },
    // });

    // this.providerSwiper = new Swiper('.provider-swiper', {
    //   loop: false,
    //   slidesPerView: 7.5,
    //   slidesPerGroup: 3,
    //   freeMode: true,
    //   spaceBetween: 10,
    //   navigation: {
    //     nextEl: '.myCarouselRight',
    //     prevEl: '.myCarouselLeft',
    //   },
    //   breakpoints: {
    //     300: {
    //       slidesPerView: 3,
    //       slidesPerGroup: 3,
    //       spaceBetween: 6,
    //     },
    //     768: {
    //       slidesPerView: 4,
    //       slidesPerGroup: 3,
    //       spaceBetween: 6,
    //     },
    //     1024: {
    //       slidesPerView: 7.5,
    //       slidesPerGroup: 6,
    //       spaceBetween: 10,
    //     },
    //   },
    //   on: {
    //     slideChange: () => this.updateProviderNavigationButtons(),
    //     reachBeginning: () => (this.ProviderPrevBtn = true),
    //     reachEnd: () => (this.ProviderNextBtn = true),
    //   },
    // });
  }

  checkCarousel() {
    if (this.screenWidth > 700 && this.isCarouselActive) {
      // this.gallerySlider.unslick();
      this.isCarouselActive = false;
    } else if (this.screenWidth <= 700 && !this.isCarouselActive) {
      this.isCarouselActive = true;
    }
  }

  heroSlickInit(e: any) {
    this.heroSlideCount = e.slick.slideCount;
  }

  heroAfterChange(e: any) {
    this.heroCurrentSlideIndex = e.currentSlide;
  }

  // Tabs
  setActiveTab(tabIndex: number): void {
    this.activeTab = tabIndex;
  }

  // Tabs

  // Table Tabs
  // setLiveTabActive(tab: string) {
  //   this.LiveTab = tab;
  // }
}
