import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, ViewChild } from '@angular/core';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { TabSliderComponent } from '../../shared/tab-slider/tab-slider.component';
@Component({
  selector: 'app-horse-racing',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, TabSliderComponent],
  templateUrl: './horse-racing.component.html',
  styleUrl: './horse-racing.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HorseRacingComponent {

  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  tabKey: string = 'friday'
  accIsOpen: boolean = true
  marketType = 'Horse Racing';
  marketSelection: boolean = false;
  currentSlideIndex = 0;
  slideCount = 0;

  racingMarketConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1235,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };

  slickInit(e: any) {
    this.slideCount = e.slick.slideCount;
  }

  afterChange(e: any) {
    this.currentSlideIndex = e.currentSlide;
  }

  prev() {

    if (this.currentSlideIndex !== 0) {
      this.slickModal.slickPrev();
    }
  }

  next() {

    if (this.currentSlideIndex !== this.slideCount) {
      this.slickModal.slickNext();
    }
  }

  carousel = [1, 2, 3, 4, 5, 6, 7, 8]

  onTabClick(key: string) {
    if (key) {
      this.tabKey = key
    }
  }
  onAllRaceAccClick() {
    this.accIsOpen = !this.accIsOpen
  }
  toggleMarketType() {
    this.marketSelection = !this.marketSelection
  }
  onMarketTypeSelect(key: string) {
    if (key) {
      this.marketType = key
    }
    this.marketSelection = !this.marketSelection
  }

  @HostListener("document:click", ["$event"])
  clickOutside(event: Event) {
    const targetElement = event.target as HTMLElement;
    const clickedInside = targetElement.closest(".market-selection-container");

    if (!clickedInside) {
      this.marketSelection = false
    }
  }

  tabsItem = [
    { tabTitle: 'Friday 08', dotState: false },
    { tabTitle: 'Saturday 09', dotState: false },
    { tabTitle: 'Yesterday 10', dotState: false },
    { tabTitle: 'Today 11', dotState: false },
    { tabTitle: 'Tommorrow 12', dotState: false },
    { tabTitle: 'Wednesday 13', dotState: false },
    { tabTitle: ' Thursday 14', dotState: false },
  ]

  tabsItems = [
    { tabTitle: 'All Bets', dotState: false },
    { tabTitle: 'High Rollers', dotState: false },
    { tabTitle: 'Race Leaderboard', dotState: false },
  ]

  
}
