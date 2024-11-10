import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pal-ful',
  standalone: true,
  imports: [NgClass, NgIf, FormsModule],
  templateUrl: './pal-ful.component.html',
  styleUrl: './pal-ful.component.css'
})
export class PalFulComponent implements OnInit {
  currentTab = 'main';
  currentTabTable = 'table';
  currentTabSelect = 'select';
  currentTabSlider = 'slider';
  firstOption: string = 'A';
  secondOption: string = '1';
  displayOption: string = 'A/1';
  firstRangeValue = 1;
  secondRangeValue = 1;
  displayRange = '';
  ngOnInit(): void {
    this.updateDisplayRange()
  }

  updateDisplayRange() {
    this.displayRange = `${this.firstRangeValue}/${this.secondRangeValue}`;
  }
  updateDisplay() {
    this.displayOption = `${this.firstOption}/${this.secondOption}`;
  }
  openStates = {
    isOpenx2: true,
    isOpenDraw: true,
    isOpenAsian: true,
    correctScore: true,
    halfFullTime: true,
    isOpenRange: true,

  };

  toggle(item: keyof typeof this.openStates): void {
    this.openStates[item] = !this.openStates[item];
  }
}
