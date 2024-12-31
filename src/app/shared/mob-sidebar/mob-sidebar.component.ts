import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mob-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mob-sidebar.component.html',
  styleUrl: './mob-sidebar.component.css',
})
export class MobSidebarComponent implements OnInit {
  mobSidebarState: boolean = false;
  hideSideBar: boolean = false;
  selectedLanguage: string = 'English';
  viewType = 'Profile';
  timeoutId: any;
  toggleCoolDown: boolean = false;
  languageSelectionState: boolean = true;
  constructor(private toggle: ToggleService) {}

  ngOnInit(): void {
    this.hideSideBar = true;
    this.getViewType();
    this.getMobSidebarState();
  }

  toggleLanguageMenu() {
    this.languageSelectionState = !this.languageSelectionState;
  }

  getViewType() {
    this.toggle.getMobSideBarContent().subscribe((val: string) => {
      this.viewType = val;
    });
  }
  getMobSidebarState() {
    this.toggle.getMobileSideBarState().subscribe((val: boolean) => {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      if (val) {
        setTimeout(() => {
          this.mobSidebarState = val;
        }, 10);
      }
      if (!val) {
        this.mobSidebarState = val;

        this.timeoutId = setTimeout(() => {
          this.hideSideBar = true;
        }, 1000);
      } else {
        this.hideSideBar = false;
      }
    });
  }
  // getMobSidebarState() {
  //   this.toggle.getMobileSideBarState().subscribe((val: boolean) => {
  //     if (this.toggleCoolDown) return;

  //     this.toggleCoolDown = true;
  //     this.mobSidebarState = val;

  //     if (this.timeoutId) {
  //       clearTimeout(this.timeoutId);
  //     }

  //     if (!this.mobSidebarState) {
  //       this.timeoutId = setTimeout(() => {
  //         this.hideSideBar = true;
  //       }, 700);
  //     } else {
  //       this.hideSideBar = false;
  //     }

  //     setTimeout(() => {
  //       this.toggleCoolDown = false;
  //     }, 710);
  //   });
  // }
  onLanguageChange(language: string): void {
    this.selectedLanguage = language;
    console.log('Selected Language:', this.selectedLanguage);
  }
  gameList = [
    {
      img: '/images/fire.svg',
      name: 'Universe Originals',
    },
    {
      img: '',
      name: 'Slots',
    },
    {
      img: '',
      name: 'Live Casino',
    },
    {
      img: '',
      name: 'Black Jack',
    },
    {
      img: '',
      name: 'Baccarat',
    },
    {
      img: '',
      name: 'Teen Patti',
    },
    {
      img: '',
      name: 'Teen Patti',
    },
    {
      img: '',
      name: 'Teen Patti',
    },
    {
      img: '',
      name: 'Teen Patti',
    },
  ];

  profileList = [
    {
      img: '/images/myBets.svg',
      name: 'My Bets',
    },
    {
      img: '/images/profitLoss.svg',
      name: 'Profit Loss',
    },
    {
      img: '/images/stakeEdit.svg',
      name: 'Stake Edit',
    },
    {
      img: '/images/gameRates.svg',
      name: 'Game Rates',
    },
    {
      img: '/images/rules.svg',
      name: 'Rules',
    },
    {
      img: '/images/blog.svg',
      name: 'Blog',
    },
    {
      img: '/images/gameAdvice.svg',
      name: 'Game Advice',
    },
  ];

  languages = [
    { label: 'English', value: 'English' },
    { label: 'Español', value: 'Espanol' },
    { label: 'Hindi', value: 'Hindi' },
  ];
}
