import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { TabSliderComponent } from '../../shared/tab-slider/tab-slider.component';

@Component({
  selector: 'app-all-tennis',
  standalone: true,
  imports: [CommonModule, TabSliderComponent],
  templateUrl: './all-tennis.component.html',
  styleUrl: './all-tennis.component.css'
})
export class AllTennisComponent {
  statusType = 'Winner';
  statusSelection: boolean = false;
  nestedAcc=[1,2]
  nestedAccCards=[1,2,3,4]
  accCards=[1,2,3,4,5,6]
  isAcc:boolean=false;
  isNestedAcc:boolean=false;
  constructor(private location:Location){}
  tabsItem = [
    { tabTitle: 'Live & Upcoming', dotState: false },
    { tabTitle: 'Outrights', dotState: false },
    { tabTitle: 'All Tennis', dotState: false },
  ]
  toggleAcc(){
    this.isAcc=!this.isAcc
  }
  toggleNestedAcc(){
    this.isNestedAcc=!this.isNestedAcc
  }
  toggleStatusType() {
    this.statusSelection = !this.statusSelection
  }
  onMarketTypeSelect(key: string) {
    if (key) {
      this.statusType = key
    }
    this.statusSelection = !this.statusSelection
  }

  navigateBack(){
    this.location.back()
  }
}
