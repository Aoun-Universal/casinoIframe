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
      imgUrl: '/assets/9bb3b19ed17df36fea03b8f37a46c5e29612de33-1200x630.webp',
      endDate: 'Ends at 5:59 PM 12/31/2024',
      title: 'Stake\'s Daily Races'
    },
    {
      imgUrl: '/assets/secound.webp',
      endDate: 'Ends at 6:00 PM 12/8/2024',
      title: 'Stake\'s Weekly Raffle'
    },
    {
      imgUrl: '/assets/39894ce93f067b53d81fb9089b7a1bf1b7e51d41-1200x630.webp',
      endDate: 'Ends at 7:00 PM 11/18/2024',
      title: 'Stake vs Eddie'
    }, {
      imgUrl: '/assets/1e203a088ef3fbdc3638c8a4db5562f3b93221c0-1200x630.webp',
      endDate: 'Ends at 7:00 PM 11/22/2024',
      title: 'Conquer the Casino! '
    }
    , {
      imgUrl: '/assets/847899a3d837d57d44ed8ad0b70d728a5ea4f552-1200x630.webp',
      endDate: 'Ends at 7:00 PM 11/19/2024',
      title: 'Multiplier Race '
    }
    , {
      imgUrl: '/assets/fcf25b0fc072ef5278325531c2e63c554661b5e0-1200x630 (1).webp',
      endDate: 'Ends at 7:00 PM 11/20/2024',
      title: 'The Level Up'
    }, {
      imgUrl: '/assets/25ffe00ddb56f3993577d895e6fa31fd4971b02b-1200x630 (1).webp',
      endDate: 'Ends at 7:00 PM 11/21/2024',
      title: 'Chaos Collector'
    }, {
      imgUrl: '/assets/b905d6b97c90604ccd9e5266997df8784ec20c9e-1200x630.webp',
      endDate: 'Ends at 7:00 PM 12/1/2024',
      title: 'Pragmatic Blackjack Cup'
    }, {
      imgUrl: '/assets/df972469b8c834535c9c6c11e8adec8653edcf5f-1200x630.webp',
      endDate: 'Ends at 5:00 PM 12/31/2024',
      title: 'Pragmatic Drops & Wins Slots'
    }
    , {
      imgUrl: 'assets/4d1e5a64c038a06dbd608fc0924998a5bb96f041-1200x630.webp',
      endDate: 'Ends at 12:00 PM 12/11/2025',
      title: 'Pragmatic\'s Blackjack Holiday Tournaments'
    }  , {
      imgUrl: '/assets/13a2a38e744daa8a2ac469f045d15f6040d2e8da-2400x1260.webp',
      endDate: 'Ends at 7:00 PM 1/8/2024',
      title: 'Pragmatic Drops & Wins Mega Roulette Madness'
    }  , {
      imgUrl: '/assets/41b5f4a630c7525185cb1eda8c2f76aaecab7d65-1200x630.webp',
      endDate: 'Ends at 7:00 PM 12/31/2024',
      title: 'Casino Challenges'
    }
  ];

}
