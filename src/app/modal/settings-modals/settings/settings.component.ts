import { CommonModule, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  tab = 'General';
  isopen = false;
  toggledropdown() {
    this.isopen = !this.isopen;
  }
  @ViewChild('inputField') inputField!: ElementRef;
  tooltipVisible = false;

  ngAfterViewInit() {}

  showTooltip() {
    if (this.inputField) {
      const inputValue = this.inputField.nativeElement.value;
      navigator.clipboard.writeText(inputValue).then(() => {
        this.tooltipVisible = true;
        setTimeout(() => {
          this.tooltipVisible = false;
        }, 5000);
      });
    }
  }
  
  openStates = {
    tabone: false,
    tabtwo:false,
    tabthree:false
  };
  toggledropdownfunc(item: keyof typeof this.openStates){
    this.openStates[item] = !this.openStates[item];
  }
}
