import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import {Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, OnInit, ViewChild} from '@angular/core';
import { ToggleService } from '../../services/toggle.service';
import { BetSlipComponent } from '../../shared/bet-slip/bet-slip.component';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { StatisticsModalTableComponent } from "../../modal/statistics-modal-table/statistics-modal-table.component";
import { LeaderboardComponent } from '../../modal/leaderboard/leaderboard.component';
import { RaceComponent } from '../../modal/race/race.component';
import {ActivatedRoute, Router } from '@angular/router';
import { BetsModalComponent } from '../../modal/bets-modal/bets-modal.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NgIf, NgClass, NgStyle, BetSlipComponent, SlickCarouselModule,NgSwitch,NgSwitchCase,LeaderboardComponent,RaceComponent, BetsModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit{
  isLoggedIn: boolean = false;
  routeType: 'sport' | 'casino' | 'authenticated' | '' = '';
  // Navigate to specific routes
  isMarketOpen = true;
  isMarketOpen2 = true;
  betSlipContent = false
  activeTab: number = 1;
  LiveTab = 'basketball';
  TableTab: number = 1;
  // Winner Dropdown
  WinnerDropdown = false;
  heroCurrentSlideIndex = 0;
  heroSlideCount = 0;
  sportsCurrentSlideIndex = 0;
  sportsSlideCount = 0;
  galleryCurrentSlideIndex = 0;
  gallerySlideCount = 0;
  slides: Array<any> = [];
  searchPlaceholder: string = '';
  @ViewChild('heroSlider') heroSlider!: SlickCarouselComponent;
  @ViewChild('sportsSlider') sportsSlider!: SlickCarouselComponent;
  @ViewChild('gallerySlider') gallerySlider!: SlickCarouselComponent;


  constructor( private router: Router,private toggleService: ToggleService,private route: ActivatedRoute) {}

  ngOnInit() {
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
    if(this.routeType === 'casino'){
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
    }else if(this.routeType === 'sport'){
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
      timer: { days: 2, hours: 8 , minutes:5},
      footerType: "progressBar",  // Unique identifier for different footer
      progress: 0,
      clickFunction: this.openLeaderBoardModal.bind(this),
      InfoModal:this.openRaceModal.bind(this),
    },
  ];

  index = 0;

  heroSliderConfig = {
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    infinite: false,
    variableWidth: false,
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

  // Adjust width issues of gallery slider

  isCarouselActive = true;
  screenWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.checkCarousel();
  }

  ngAfterViewInit() {
    this.checkCarousel();
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

  topSportsConfig = {
    slidesToShow: 2,
    slidesToScroll: 2,
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

  heroAfterChange(e: any) {
    this.heroCurrentSlideIndex = e.currentSlide;
  }

  galleryAfterChange(e: any) {
    this.galleryCurrentSlideIndex = e.currentSlide;
  }

  sportsAfterChange(e: any) {
    this.sportsCurrentSlideIndex = e.currentSlide;
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
    if (this.sportsCurrentSlideIndex !== 0) {
      this.sportsSlider.slickPrev();
    }
  }

  heroNext() {
    if (this.heroCurrentSlideIndex !== this.heroSlideCount) {
      this.heroSlider.slickNext();
    }
  }

  sportsNext() {
    if (this.sportsCurrentSlideIndex !== this.sportsSlideCount) {
      this.sportsSlider.slickNext();
    }
  }

  openBetModal(){
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

}
