import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-statistics-modal-table',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './statistics-modal-table.component.html',
  styleUrl: './statistics-modal-table.component.css'
})
export class StatisticsModalTableComponent {
  ignore: boolean = false
  tabs = 'statistics'
  // modalClose = false
  showTabs(tabName: any) {
    this.tabs = tabName
  }
  isDropdownOpen = false;

  ignoreunIgore() {
    this.ignore = !this.ignore
  }
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  // closeModal() {
  //   this.modalClose = false
  // }
  constructor(private toggle: ToggleService) { }

  closestatisticModal() {
    this.toggle.setstatisticsTableModalState(false)
  }
}
