import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';
import { BetSlipComponent } from '../../shared/bet-slip/bet-slip.component';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { StatisticsModalTableComponent } from "../../modal/statistics-modal-table/statistics-modal-table.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgStyle, BetSlipComponent, SlickCarouselModule,NgSwitch,NgSwitchCase,StatisticsModalTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  @ViewChild('heroSlider') heroSlider!: SlickCarouselComponent;
  @ViewChild('sportsSlider') sportsSlider!: SlickCarouselComponent;
  @ViewChild('gallerySlider') gallerySlider!: SlickCarouselComponent;

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
    {
      img: "https://mediumrare.imgix.net/politics-entertainment-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167",
      count: 1
    },
    { img: "https://mediumrare.imgix.net/soccer-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 2 },
    { img: "https://mediumrare.imgix.net/tennis-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 3 },
    { img: "https://mediumrare.imgix.net/basketball-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 4 },
    { img: "https://mediumrare.imgix.net/cricket-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 5 },
    { img: "https://mediumrare.imgix.net/ice-hockey-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 6 },
    {
      img: "https://mediumrare.imgix.net/american-football-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167",
      count: 7
    },
    { img: "https://mediumrare.imgix.net/racing-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 8 },
    { img: "https://mediumrare.imgix.net/dota-2-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 9 },
    { img: "https://mediumrare.imgix.net/counter-strike-en.png?&dpr=1.5&format=auto&auto=format&q=50&w=167", count: 10 },

  ];

  cards = [
    {
      title: "$100k Race",
      description: "Ready to race to the top?",
      leaderboardText: "Leaderboard",
      timer: { hours: 9, minutes: 11 },
      footerType: "notEnteredYet",  // Unique identifier for footer type
    },
    {
      title: "$75k Weekly Raffle",
      description: "Finish your week with a win!",
      leaderboardText: "0 Tickets",
      timer: { days: 2, hours: 8 },
      footerType: "progressBar",  // Unique identifier for different footer
      progress: 0,
    },
  ];
  





  index = 0;

  heroSliderConfig = {
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

  galleryNext() {

    if (this.galleryCurrentSlideIndex !== this.gallerySlideCount) {
      this.gallerySlider.slickNext();
    }
  }

  // Betslip
  constructor(private toggleService: ToggleService) {
  }

  openModal() {
    this.toggleService.setBetslipstate(true);
    this.toggleService.setBetslipContent(!this.betSlipContent)
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