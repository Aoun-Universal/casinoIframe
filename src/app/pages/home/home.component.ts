import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, SlickCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  currentSlideIndex = 0;
  slideCount = 0;

  // slideConfig = {
  //   slidesToScroll: 1,
  //   slidesToShow: 1,
  //   infinite: true,
  //   autoplay: true,
  //   pauseOnHover: true,
  //   adaptiveHeight: true,
  //   autoplaySpeed: 2000,
  //   swipeToSlide: true, 
  //   arrows:false, 
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         autoplay: true,
  //         pauseOnHover: true,
  //         swipeToSlide: true,  
  //       },
  //     },
  //   ],
  // };
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false,
    nextArrow: this.getNextArrow(),
    prevArrow: this.getPrevArrow(),
   };

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


  slickInit(e: any) {
    this.slideCount = e.slick.slideCount;
    this.updateArrows();
  }

  afterChange(e: any) {
    this.currentSlideIndex = e.currentSlide;
    this.updateArrows();
  }

  getNextArrow() {
    return this.currentSlideIndex === this.slideCount - 1
      ? ''
      : '<div class="nav-btn next-slide">next</div>';
  }

  getPrevArrow() {
    return this.currentSlideIndex === 0
      ? ''
      : '<div class="nav-btn prev-slide">prev</div>';
  }

  updateArrows() {
    this.slideConfig.nextArrow = this.getNextArrow();
    this.slideConfig.prevArrow = this.getPrevArrow();
  }


}