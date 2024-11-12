import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-soccer',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './soccer.component.html',
  styleUrl: './soccer.component.css',
})
export class SoccerComponent {
  activeTab: string = 'live&Upcoming';
  activeTab2: string = 'allBets';
  standardView: boolean = true;
  catDropdownState: boolean = false;
  catDropdownSelectedVal: string = 'Winner';
  eventDropdownState: boolean = true;
  subEventDropdown: boolean = true;
  isLive: boolean = true;
  soccerBettingOddsState: boolean = false;

  setActiveTab(val: string) {
    this.activeTab = val;
  }

  setActiveTab2(val: string) {
    this.activeTab2 = val;
  }

  toggleStandardView() {
    this.standardView = !this.standardView;
    if (this.standardView) {
      this.catDropdownState = false;
    }
  }

  selectCatDropdownVal(val: string) {
    this.catDropdownSelectedVal = val;
  }

  toggleCatDropDown() {
    this.catDropdownState = !this.catDropdownState;
  }
  toggleEventDropdown() {
    this.eventDropdownState = !this.eventDropdownState;
  }

  toggleSubEventDropdown() {
    this.subEventDropdown = !this.subEventDropdown;
  }
  toggleSoccerBettingOddState() {
    this.soccerBettingOddsState = !this.soccerBettingOddsState;
  }
}
