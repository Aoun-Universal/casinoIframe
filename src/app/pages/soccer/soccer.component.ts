import { NgClass, NgIf, Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-soccer',
  standalone: true,
  imports: [NgClass, NgIf, RouterLink],
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
  constructor(private location:Location){}
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

  navigateBack(){
    this.location.back()
  }
}
