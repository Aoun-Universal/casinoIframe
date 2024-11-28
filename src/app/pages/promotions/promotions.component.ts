import { Component } from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";

@Component({
  selector: 'app-promotions',
  standalone: true,
    imports: [
        CommonModule
    ],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.css'
})
export class PromotionsComponent {
  races = [
    {
      imgUrl: '/assets/rocket-red.webp',
      endDate: 'Ends at 5:59 PM 12/31/2024',
      title: 'Stake\'s Daily Races'
    },
    {
      imgUrl: '/assets/secound.webp',
      endDate: 'Ends at 6:00 PM 12/8/2024',
      title: 'Stake\'s Weekly Raffle'
    },
    {
      imgUrl: '/assets/darts-game.webp',
      endDate: 'Ends at 7:00 PM 11/18/2024',
      title: 'Stake vs Eddie'
    }, {
      imgUrl: '/assets/golden-crown.webp',
      endDate: 'Ends at 7:00 PM 11/22/2024',
      title: 'Conquer the Casino! '
    }
    , {
      imgUrl: '/assets/time-travel.webp',
      endDate: 'Ends at 7:00 PM 11/19/2024',
      title: 'Multiplier Race '
    }
    , {
      imgUrl: '/assets/gaming-box.webp',
      endDate: 'Ends at 7:00 PM 11/20/2024',
      title: 'The Level Up'
    }, {
      imgUrl: '/assets/gold-box.webp',
      endDate: 'Ends at 7:00 PM 11/21/2024',
      title: 'Chaos Collector'
    }, {
      imgUrl: '/assets/golden-cards.webp',
      endDate: 'Ends at 7:00 PM 12/1/2024',
      title: 'Pragmatic Blackjack Cup'
    }, {
      imgUrl: '/assets/old-man.webp',
      endDate: 'Ends at 5:00 PM 12/31/2024',
      title: 'Pragmatic Drops & Wins Slots'
    }
    , {
      imgUrl: 'assets/card-queen.webp',
      endDate: 'Ends at 12:00 PM 12/11/2025',
      title: 'Pragmatic\'s Blackjack Holiday Tournaments'
    }  , {
      imgUrl: '/assets/rollate.webp',
      endDate: 'Ends at 7:00 PM 1/8/2024',
      title: 'Pragmatic Drops & Wins Mega Roulette Madness'
    }  , {
      imgUrl: '/assets/golden-dice.webp',
      endDate: 'Ends at 7:00 PM 12/31/2024',
      title: 'Casino Challenges'
    }
  ];

}
