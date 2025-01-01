import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  HostListener,
  Input,
  input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-universe-originals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './universe-originals.component.html',
  styleUrl: './universe-originals.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UniverseOriginalsComponent implements OnInit, AfterViewInit,OnDestroy {
  @Input() defaultView:boolean=false;
  owlPrevBtn: boolean = true;
  owlNextBtn: boolean = false;
  stakeOrigin!: Swiper | undefined;
  TableTab: number = 1;
  casinoViewAllState: boolean = false;

  stakeCurrentSlideIndex = 0;
  stakeSlideCount = 0;

  searchPlaceholder: string = '';

  swiperConfig: any;
  @ViewChild('swiperContainer', { static: true }) swiperContainer!: ElementRef;
  swiperBreakPoint = {
    slide: 7.5,
    space: 10,
  };

  stakes = [
    {
      img: '/assets/home/stake-1.avif',
      count: 3469,
      status: 'Playing',
    },
    { img: '/assets/home/stake-2.avif', count: 1943, status: 'Maintenance' },
    { img: '/assets/home/stake-3.avif', count: 1931, status: 'Playing' },
    { img: '/assets/home/stake-4.avif', count: 1962, status: 'Maintenance' },
    { img: '/assets/home/stake-5.avif', count: 4814, status: 'Playing' },
    { img: '/assets/home/stake-6.avif', count: 3218, status: 'Playing' },
    {
      img: '/assets/home/stake-7.avif',
      count: 1450,
      status: 'Playing',
    },
    { img: '/assets/home/stake-8.avif', count: 895, status: 'Playing' },
    { img: '/assets/home/stake-9.avif', count: 930, status: 'Playing' },
    { img: '/assets/home/stake-10.avif', count: 1414, status: 'Maintenance' },
    { img: '/assets/home/stake-11.avif', count: 186, status: 'Playing' },
    { img: '/assets/home/stake-12.avif', count: 711, status: 'Playing' },
    { img: '/assets/home/stake-13.avif', count: 105, status: 'Playing' },
    { img: '/assets/home/stake-14.avif', count: 895, status: 'Maintenance' },
    { img: '/assets/home/stake-15.avif', count: 930, status: 'Playing' },
    { img: '/assets/home/stake-16.avif', count: 1414, status: 'Playing' },
    { img: '/assets/home/stake-17.avif', count: 895, status: 'Maintenance' },
    { img: '/assets/home/stake-18.avif', count: 930, status: 'Playing' },
  ];

  index = 0;

  isCarouselActive = true;
  screenWidth = window.innerWidth;

  // swiperInstance: Swiper;
  constructor(private router: Router) {}
  ngOnDestroy(): void {
    if (this.stakeOrigin) {
      this.stakeOrigin.destroy(true, true);
      this.stakeOrigin = undefined;
    }
  }

  ngOnInit() {
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
    if(this.defaultView){

      this.initializeSwiper(this.getDefaultSwiperConfig());
    }else{
      // this.casinoViewAllState=true;
      this.initializeSwiper(this.getGridSwiperConfig());
    }

  }
  updateNavigationButtons() {
    if (this.stakeOrigin) {
      this.owlPrevBtn = this.stakeOrigin.isBeginning;
      this.owlNextBtn = this.stakeOrigin.isEnd;
    }
  }

  checkCarousel() {
    if (this.screenWidth > 700 && this.isCarouselActive) {
      // this.gallerySlider.unslick();
      this.isCarouselActive = false;
    } else if (this.screenWidth <= 700 && !this.isCarouselActive) {
      this.isCarouselActive = true;
    }
  }

  stakeSlickInit(e: any) {
    this.stakeSlideCount = e.slick.slideCount;
  }

  stakeAfterChange(e: any) {
    this.stakeCurrentSlideIndex = e.currentSlide;
  }


  private getDefaultSwiperConfig(): any {
    return {
      loop: false,
      slidesPerView: 7.5,
      slidesPerGroup: 6,
      freeMode: true,
      spaceBetween: 10,
      speed: 700,
      navigation: {
        nextEl: '.myCarouselRight',
        prevEl: '.myCarouselLeft',
      },
      breakpoints: {
        300: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 6,
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 3,
          spaceBetween: 6,
        },
        1024: {
          slidesPerView: 7.5,
          slidesPerGroup: 6,
          spaceBetween: 10,
        },
      },
      on: {
        slideChange: () => this.updateNavigationButtons(),
        reachBeginning: () => (this.owlPrevBtn = true),
        reachEnd: () => (this.owlNextBtn = true),
      },
    };
  }
  private getGridSwiperConfig(): any {
    const totalSlides = this.stakes.length;
    const slidesPerView = 3; // Number of slides per row
    const rows = Math.ceil(totalSlides / slidesPerView);

    return {
      slidesPerView: slidesPerView,
      spaceBetween: 6,
      grid: {
        rows: rows,
        fill: 'row',
      },
      navigation: false,
      loop: false,
      allowTouchMove: false,
      freeMode: false,

      breakpoints: {
        300: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 6,
          grid: {
            rows: rows,
            fill: 'row',
          },
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 3,
          spaceBetween: 6,
        },
        1024: {
          slidesPerView: 7.5,
          slidesPerGroup: 6,
          spaceBetween: 10,
        },
      },
    };
  }
  setDefaultView(): void {
    const config = this.getDefaultSwiperConfig();
    this.initializeSwiper(config);
  }

  setGridView(): void {
    const config = this.getGridSwiperConfig();
    this.initializeSwiper(config);
  }
  // setCasinoViewType() {
  //   this.casinoViewAllState = !this.casinoViewAllState;
  //   if (this.casinoViewAllState) {
  //     this.setGridView();
  //   } else {
  //     this.setDefaultView();
  //   }
  // }
  // ngAfterViewInit(): void {

  // }

  setCasinoViewType() {
    this.casinoViewAllState = !this.casinoViewAllState;
    if (this.casinoViewAllState) {
      this.initializeSwiper(this.getGridSwiperConfig());
    } else {
      this.initializeSwiper(this.getDefaultSwiperConfig());
    }
  }

  private initializeSwiper(config: any): void {
    if (this.stakeOrigin) {
      this.stakeOrigin.destroy(true, true); // Destroy existing Swiper
      this.stakeOrigin = undefined; // Reset reference
    }
    this.stakeOrigin = new Swiper('.stake-swiper', config); // Initialize new Swiper
  }


}
