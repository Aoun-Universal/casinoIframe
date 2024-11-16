import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css'
})
export class ArchiveComponent {
  tabs = ['Crypto', 'Local Currency'];
  selectedTab = 0; // Default tab index

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
