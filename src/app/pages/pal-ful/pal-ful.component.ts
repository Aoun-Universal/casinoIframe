import { NgClass, NgFor, NgIf, NgStyle, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-pal-ful',
  standalone: true,
  imports: [NgClass, NgIf, FormsModule, NgFor, NgStyle],
  templateUrl: './pal-ful.component.html',
  styleUrl: './pal-ful.component.css'
})
export class PalFulComponent implements OnInit {
  currentTab = 'main';
  currentTabTable = 'table';
  currentTabSelect = 'select';
  currentTabSlider = 'slider';
  currentTabSwitch = 'game';
  currentTabSwitchlg = 'user';
  currentTabTableSwitch = 'overall';
  firstOption: string = 'A';
  secondOption: string = '1';
  displayOption: string = 'A/1';
  firstRangeValue = 1;
  secondRangeValue = 1;
  displayRange = '';
  isChecked: boolean = false;
  targetDate: Date = new Date('2024-12-12T23:59:59');
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  slides = [1, 2, 3];
  currentIndex = 0;
  autoSlideInterval: any;
  slideDuration = 10000;

  isDragging = false;
  startX = 0;
  currentTranslate = 0;
  prevTranslate = 0;

  // Betslip
  constructor(private toggleS: ToggleService, private location:Location) { }

  openBetSlipModal() {
    this.toggleS.setBetslipstate(true);
  }


  toggleSwitch() {
  }
  ngOnInit(): void {
    this.updateDisplayRange()
    this.startAutoSlide();
    this.startCountdown();


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

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    }
  }
  previousSlide1() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  nextSlide1() {
    if (this.currentSlide1 < this.totalSlides1 - 1) {
      this.currentSlide1++;
    }
  }
  // slider





  ngOnDestroy() {
    this.stopAutoSlide();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.restartAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide3();
    }, this.slideDuration);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  restartAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  nextSlide3() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  startDrag(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.startX = this.getPositionX(event);
    this.prevTranslate = this.currentTranslate;
    this.stopAutoSlide();
  }

  dragMove(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    const currentPosition = this.getPositionX(event);
    this.currentTranslate = this.prevTranslate + currentPosition - this.startX;
  }

  endDrag() {
    if (!this.isDragging) return;
    this.isDragging = false;
    const movedBy = this.currentTranslate - this.prevTranslate;

    // Check if the drag was sufficient to change the slide
    if (movedBy < -100 && this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else if (movedBy > 100 && this.currentIndex > 0) {
      this.currentIndex--;
    }

    // Reset translate value and restart auto-slide
    this.currentTranslate = 0;
    this.prevTranslate = 0;
    this.restartAutoSlide();
  }

  getPositionX(event: MouseEvent | TouchEvent): number {
    return event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
  }
  // timer



  startCountdown() {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = this.targetDate.getTime() - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }

  navigateBack(){
    this.location.back()
  }
}
