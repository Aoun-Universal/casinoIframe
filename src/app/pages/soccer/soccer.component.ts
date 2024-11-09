import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-soccer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './soccer.component.html',
  styleUrl: './soccer.component.css',
})
export class SoccerComponent {
  activeTab: string = 'live&Upcoming';
  standardView: boolean = true;
  catDropdownState: boolean = false;
  catDropdownSelectedVal: string = 'Winner';
  eventDropdownState: boolean = true;
  subEventDropdown: boolean = true;
  isLive: boolean = true;

  setActiveTab(val: string) {
    this.activeTab = val;
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
}
