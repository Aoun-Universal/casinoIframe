import { CommonModule, NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';
import { BetSlipComponent } from '../../shared/bet-slip/bet-slip.component';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { LeaderboardComponent } from '../../modal/leaderboard/leaderboard.component';
import { RaceComponent } from '../../modal/race/race.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BetsModalComponent } from '../../modal/bets-modal/bets-modal.component';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, CommonModule, NgClass, NgStyle, BetSlipComponent, SlickCarouselModule, NgSwitch, NgSwitchCase, LeaderboardComponent, RaceComponent, BetsModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomeComponent implements OnInit, AfterViewInit {
  isLoggedIn: boolean = false;
  // swiper: Swiper | null = null;
  routeType: 'sport' | 'casino' | 'authenticated' | '' = '';
  // Navigate to specific routes
  isMarketOpen = true;
  isMarketOpen2 = true;
  betSlipContent = false
  homeSwiper!: Swiper;
  providerSwiper!: Swiper;
  liveCasino!: Swiper;
  activeTab: number = 1;
  LiveTab = 'basketball';
  // swiperInstance: Swiper | null = null;
  TableTab: number = 1;
  // Winner Dropdown
  WinnerDropdown = false;
  heroCurrentSlideIndex = 0;
  heroSlideCount = 0;
  sportsCurrentSlideIndex = 0;
  sportsSlideCount = 0;
  galleryCurrentSlideIndex = 0;
  gallerySlideCount = 0;
  stakeCurrentSlideIndex = 0;
  stakeSlideCount = 0;
  casinoCurrentSlideIndex = 0;
  casinoSlideCount = 0;
  providerCurrentSlideIndex = 0;
  providerSlideCount = 0;
  slides: Array<any> = [];
  searchPlaceholder: string = '';
  soccerBettingOddsState: boolean = false;
  @ViewChild('heroSlider') heroSlider!: SlickCarouselComponent;
  @ViewChild('sportsSlider') sportsSlider!: SlickCarouselComponent;
  @ViewChild('gallerySlider') gallerySlider!: SlickCarouselComponent;
  @ViewChild('stakeSlider') stakeSlider!: SlickCarouselComponent;
  @ViewChild('casinoSlider') casinoSlider!: SlickCarouselComponent;
  @ViewChild('providerSlider') providerSlider!: SlickCarouselComponent;
  swiperConfig: any;
  @ViewChild('swiperContainer', { static: true }) swiperContainer!: ElementRef;
  // swiperInstance: Swiper;
  constructor(private router: Router, private toggleService: ToggleService, private route: ActivatedRoute) { }
  swiperBreakPoint = {
    slide: 7.5,
    space: 10
  }


  ngOnInit() {
    const inner = window.innerWidth
    if (inner <= 992 && inner >= 400) {
      this.swiperBreakPoint.slide = 4
    } else if (inner <= 400) {
      this.swiperBreakPoint.slide = 3
    }

    const currentPath = this.route.snapshot.routeConfig?.path || '';
    console.log('Current Route Path:', currentPath);

    // Assign routeType based on the route
    if (currentPath.includes('sport')) {
      this.routeType = 'sport';
    } else if (currentPath.includes('casino')) {
      this.routeType = 'casino';
    } else if (currentPath.includes('authenticated')) {
      this.routeType = 'authenticated';
    } else {
      this.routeType = '';
    }

    console.log('Route Type:', this.routeType);

    // Set placeholders and login status
    this.searchPlaceholder = this.routeType === 'sport' ? 'Search your event' : 'Search your game';
    this.isLoggedIn = this.routeType === 'authenticated' ? this.isUserLoggedIn() : true;

    // Set up slides based on the route type
    this.setupSlides();
  }

  isUserLoggedIn(): boolean {
    return true;
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  setupSlides() {
    if (this.routeType === 'casino') {
      this.slides = [
        {
          img: "/assets/home/daily-races.avif",
          badge: "Promo",
          title: "Daily Races",
          description: "Play in our $100,000 Daily Race",
          buttonText: "Race Now"
        },
        {
          img: "/assets/home/weekly-raffle.avif",
          badge: "Promo",
          title: "Weekly Raffle",
          description: "Share in $75,000 each week",
          buttonText: "Learn More"
        },
        {
          img: "/assets/home/conquer-casino.avif",
          badge: "Promo",
          title: "Conquer the Casino",
          description: "Win a share in $50,000 every week",
          buttonText: "Play Now"
        },
        {
          img: "/assets/home/stake-vs-eddie.avif",
          badge: "Promo",
          title: "Stake vs Eddie",
          description: "Win a share in $30,000 every week",
          buttonText: "Play Now"
        },
        {
          img: "/assets/home/chaos.avif",
          badge: "Promo",
          title: "Chaos Collector",
          description: "Win a share in $10,000 every week",
          buttonText: "Play Now"
        },
        {
          img: "/assets/home/level-up.avif",
          badge: "Promo",
          title: "The Level Up",
          description: "Win a share in $20,000 every week",
          buttonText: "Play Now"
        },
        {
          img: "/assets/home/multiplier-races.avif",
          badge: "Promo",
          title: "Multiplier Race",
          description: "Win a share in $10,000 every week",
          buttonText: "Play Now"
        },

      ]
    } else if (this.routeType === 'sport') {
      this.slides = [
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
    }


  }
  sports = [
    {
      img: "/assets/home/sport-1.avif",
      count: 1
    },
    { img: "/assets/home/sport-2.avif", count: 2 },
    { img: "/assets/home/sport-3.avif", count: 3 },
    { img: "/assets/home/sport-4.avif", count: 4 },
    { img: "/assets/home/sport-5.avif", count: 5 },
    { img: "/assets/home/sport-6.avif", count: 6 },
    {
      img: "/assets/home/sport-7.avif",
      count: 7
    },
    { img: "/assets/home/sport-8.avif", count: 8 },
    { img: "/assets/home/sport-9.avif", count: 9 },
    { img: "/assets/home/sport-10.avif", count: 10 },

  ];

  cards = [
    {
      title: "$100k Race",
      description: "Ready to race to the top?",
      leaderboardText: "Leaderboard",
      timer: { hours: 9, minutes: 11 },
      footerType: "notEnteredYet",  // Unique identifier for footer type
      clickFunction: this.openLeaderBoardModal.bind(this),
      InfoModal: this.openRaceModal.bind(this),
    },
    {
      title: "$75k Weekly Raffle",
      description: "Finish your week with a win!",
      leaderboardText: "0 Tickets",
      timer: { days: 2, hours: 8, minutes: 5 },
      footerType: "progressBar",
      progress: 0,
      clickFunction: this.openLeaderBoardModal.bind(this),
      InfoModal: this.openRaceModal.bind(this),
    },
  ];

  stakes = [
    {
      img: "/assets/home/stake-1.avif",
      count: 3469
    },
    { img: "/assets/home/stake-2.avif", count: 1943 },
    { img: "/assets/home/stake-3.avif", count: 1931 },
    { img: "/assets/home/stake-4.avif", count: 1962 },
    { img: "/assets/home/stake-5.avif", count: 4814 },
    { img: "/assets/home/stake-6.avif", count: 3218 },
    {
      img: "/assets/home/stake-7.avif",
      count: 1450
    },
    { img: "/assets/home/stake-8.avif", count: 895 },
    { img: "/assets/home/stake-9.avif", count: 930 },
    { img: "/assets/home/stake-10.avif", count: 1414 },
    { img: "/assets/home/stake-11.avif", count: 186 },
    { img: "/assets/home/stake-12.avif", count: 711 },
    { img: "/assets/home/stake-13.avif", count: 105 },
    { img: "/assets/home/stake-14.avif", count: 895 },
    { img: "/assets/home/stake-15.avif", count: 930 },
    { img: "/assets/home/stake-16.avif", count: 1414 },
    { img: "/assets/home/stake-17.avif", count: 895 },
    { img: "/assets/home/stake-18.avif", count: 930 },
  ];

  casinos: { img: string }[] = [
    {
      img: "/assets/home/casino-1.avif"
    },
    { img: "/assets/home/casino-2.avif" },
    { img: "/assets/home/casino-3.avif" },
    { img: "/assets/home/casino-4.avif" },
    { img: "/assets/home/casino-5.avif" },
    { img: "/assets/home/casino-6.avif" },
    { img: "/assets/home/casino-7.avif" },
    { img: "/assets/home/casino-8.avif" },
    { img: "/assets/home/casino-9.avif" },
    { img: "/assets/home/casino-10.avif" },
    { img: "/assets/home/casino-11.avif" },
    { img: "/assets/home/casino-12.avif" },
    { img: "/assets/home/casino-13.avif" },
    { img: "/assets/home/casino-14.avif" },
    { img: "/assets/home/casino-15.avif" },
    { img: "/assets/home/casino-16.avif" },
    { img: "/assets/home/casino-17.avif" },
    { img: "/assets/home/casino-18.avif" },
    { img: "/assets/home/casino-19.avif" },
    { img: "/assets/home/casino-20.avif" },
    { img: "/assets/home/casino-21.avif" },
    { img: "/assets/home/casino-22.avif" },

  ];

  providers = [
    { img: "/assets/providers/pragmatic.png" },
    { img: "/assets/providers/evolution.png" },
    { img: "/assets/providers/hacksaw.png" },
    { img: "/assets/providers/nolimit.jpeg" },
    { img: "/assets/providers/play-go.png" },
    { img: "/assets/providers/push-gaming.png" },
    { img: "/assets/providers/real-gaming.png" },
    { img: "/assets/providers/massive.png" },
    { img: "/assets/providers/stake-gaming.png" },
    { img: "/assets/providers/titan-gaming.png" },
    { img: "/assets/providers/avatar-ux.png" },
    { img: "/assets/providers/backseat.png" },
    { img: "/assets/providers/twist.png" },
    { img: "/assets/providers/octoplay.png" },
    { img: "/assets/providers/elk-studios.png" },
    { img: "/assets/providers/thunderkick.jpeg" },
    { img: "/assets/providers/popiplay.png" },
    { img: "/assets/providers/bg-gaming.png" },
    { img: "/assets/providers/print-studios.png" },
    { img: "/assets/providers/bullshark.png" },
    { img: "/assets/providers/pg-gaming.jpeg" },
    { img: "/assets/providers/netent.png" },
    { img: "/assets/providers/btg.png" },
    { img: "/assets/providers/red-tiger.png" },
    { img: "/assets/providers/fantasma.png" },
    { img: "/assets/providers/game-art.png" },
    { img: "/assets/providers/oslotmill.png" },
    { img: "/assets/providers/one-touch.png" },
    { img: "/assets/providers/wazdan.png" },
    { img: "/assets/providers/live-88.png" },
    { img: "/assets/providers/gamomat.png" },
    { img: "/assets/providers/games-global.png" },
    { img: "/assets/providers/belatra.png" },
    { img: "/assets/providers/endorphina.png" },
    { img: "/assets/providers/true-lab.png" },
    { img: "/assets/providers/blue-print.png" },
    { img: "/assets/providers/redrake.png" },
    { img: "/assets/providers/boming-games.png" },
    { img: "/assets/providers/quick-spin.png" },
    { img: "/assets/providers/novomatic.png" },
    { img: "/assets/providers/oaks-gaming.png" },
    { img: "/assets/providers/jade-rabbit.png" },
    { img: "/assets/providers/jade-rabbit.png" },
  ];

  index = 0;

  heroSliderConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    infinite: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 947,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

  };

  // Adjust width issues of gallery slider

  isCarouselActive = true;
  screenWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    // this.checkCarousel();
  }

  ngAfterViewInit() {
    // this.checkCarousel();
    this.homeSwiper = new Swiper('.sport-swiper', {
      loop: false,
      slidesPerView: 7.5,
      slidesPerGroup: 6,
      freeMode: true,
      spaceBetween: 10,
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
    },)

    this.providerSwiper = new Swiper('.provider-swiper', {
      loop: false,
      slidesPerView: 7.5,
      slidesPerGroup: 3,
      freeMode: true,
      spaceBetween: 10,
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
    },)

    this.liveCasino = new Swiper('.casino-swiper', {
      loop: false,
      slidesPerView: 7.5,
      slidesPerGroup: 3,
      freeMode: true,
      spaceBetween: 10,
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
    },)

  }

  checkCarousel() {
    if (this.screenWidth > 700 && this.isCarouselActive) {
      this.gallerySlider.unslick();
      this.isCarouselActive = false;
    } else if (this.screenWidth <= 700 && !this.isCarouselActive) {
      this.isCarouselActive = true;
      setTimeout(() => {
        this.gallerySlider.initSlick(); // Reinitialize carousel below 700px
      });
    }
  }



  galleryConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1154,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false
        }
      },
    ],
  };

  stakeConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    infinite: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1154,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        }
      },
    ],

  };



  openstatisticsTableModalState() {
    this.toggleService.setstatisticsTableModalState(true)
  }


  heroSlickInit(e: any) {
    this.heroSlideCount = e.slick.slideCount;
  }

  sportsSlickInit(e: any) {
    this.sportsSlideCount = e.slick.slideCount;
  }

  gallerySlickInit(e: any) {
    this.gallerySlideCount = e.slick.slideCount;
  }

  stakeSlickInit(e: any) {
    this.stakeSlideCount = e.slick.slideCount;
  }

  casinoSlickInit(e: any) {
    this.casinoSlideCount = e.slick.slideCount;
  }

  providerSlickInit(e: any) {
    this.providerSlideCount = e.slick.slideCount;
  }

  heroAfterChange(e: any) {
    this.heroCurrentSlideIndex = e.currentSlide;
  }

  galleryAfterChange(e: any) {
    this.galleryCurrentSlideIndex = e.currentSlide;
  }

  sportsAfterChange(e: any) {
    this.sportsCurrentSlideIndex = e.currentSlide;
  }

  stakeAfterChange(e: any) {
    this.stakeCurrentSlideIndex = e.currentSlide;
  }

  providerAfterChange(e: any) {
    this.providerCurrentSlideIndex = e.currentSlide;
  }

  casinoAfterChange(e: any) {
    this.casinoCurrentSlideIndex = e.currentSlide;
  }

  heroPrev() {
    if (this.heroCurrentSlideIndex !== 0) {
      this.heroSlider.slickPrev();
    }
  }

  galleryPrev() {
    if (this.galleryCurrentSlideIndex !== 0) {
      this.gallerySlider.slickPrev();
    }
  }

  sportsPrev() {

    this.sportsSlider.slickPrev();

  }

  stakesPrev() {
    this.stakeSlider.slickPrev();

  }

  casinoPrev() {
    this.casinoSlider.slickPrev();
  }

  providerPrev() {

    this.providerSlider.slickPrev();

  }

  heroNext() {
    if (this.heroCurrentSlideIndex !== this.heroSlideCount) {
      this.heroSlider.slickNext();
    }
  }

  sportsNext() {

    this.sportsSlider.slickNext();
  }

  stakesNext() {
    if (this.stakeCurrentSlideIndex !== this.stakeSlideCount) {
      this.stakeSlider.slickNext();
    }
  }

  casinoNext() {
    this.casinoSlider.slickNext();

  }

  providerNext() {
    this.providerSlider.slickNext();
  }

  openBetModal() {
    this.toggleService.setBetModal(true)
  }

  galleryNext() {

    if (this.galleryCurrentSlideIndex !== this.gallerySlideCount) {
      this.gallerySlider.slickNext();
    }
  }

  // Betslip

  openModal() {
    this.toggleService.setBetslipstate(true);
    this.toggleService.setBetslipContent(!this.betSlipContent)
  }

  openLeaderBoardModal() {
    this.toggleService.setLeaderBoardModal(true);
  }

  openRaceModal() {
    this.toggleService.setRaceModal(true);
  }

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
  toggleSoccerBettingOddState() {
    this.soccerBettingOddsState = !this.soccerBettingOddsState;
  }

  slideConfig = {
    slidesToShow: 6.4,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    navigation: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 947,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        },
      },
    ],

  };

  casinoConfig = {
    slidesToShow: 6.4,
    slidesToScroll: 3,
    infinite: true,
    arrows: false,
    navigation: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 947,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],

  };

  providerConfig = {
    slidesToShow: 6.4,
    slidesToScroll: 1,
    swipe: true,
    touchThreshold: 10,
    infinite: false,
    arrows: false,
    navigation: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 947,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],

  };

  topSportsConfig = {
    slidesToShow: 6.4,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    navigation: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 947,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],

  };


  // slideNext(): void {
  //   this.swiperInstance?.slideNext(); // Move to the next slide
  //   console.log('hi', this.swiperInstance);
  // }

  // slidePrev(): void {
  //   this.swiperInstance?.slidePrev(); // Move to the previous slide
  //   console.log('', this.swiperInstance);
  // }



}
