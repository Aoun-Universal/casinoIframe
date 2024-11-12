import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SwiperContainer } from 'swiper/element';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-pal-ful',
  standalone: true,
  imports: [NgClass, NgIf, FormsModule],
  templateUrl: './pal-ful.component.html',
  styleUrl: './pal-ful.component.css'
})
export class PalFulComponent implements OnInit {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  currentTab = 'main';
  currentTabTable = 'table';
  currentTabSelect = 'select';
  currentTabSlider = 'slider';
  currentTabSeitch = 'game';
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
    isOpenMatchSlides: true,

  };

  toggle(item: keyof typeof this.openStates): void {
    this.openStates[item] = !this.openStates[item];
  }

  currentSlide = 0;
  totalSlides = 3;
  currentSlide1 = 0;
  totalSlides1 = 3;

  // Navigate to the previous slide
  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  // Navigate to the next slide
  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    }
  }
  // Navigate to the previous slide
  previousSlide1() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  // Navigate to the next slide
  nextSlide1() {
    if (this.currentSlide1 < this.totalSlides1 - 1) {
      this.currentSlide1++;
    }
  }
}
