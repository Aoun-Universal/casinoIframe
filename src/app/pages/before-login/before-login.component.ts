import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TabSliderComponent } from '../../shared/tab-slider/tab-slider.component';

@Component({
  selector: 'app-before-login',
  standalone: true,
  imports: [CommonModule, TabSliderComponent],
  templateUrl: './before-login.component.html',
  styleUrl: './before-login.component.css'
})
export class BeforeLoginComponent {
  dropdownState: string = ''
  dropdown(name:any) {
    if (this.dropdownState === name){
      this.dropdownState = ''
    }else{
      this.dropdownState = name
    }
   
  }

  tabsItems = [
    { tabTitle: 'Casino', dotState: false },
    { tabTitle: 'Sports', dotState: false },

  ]
}
