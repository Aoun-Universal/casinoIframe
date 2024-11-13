import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AffiliateComponent } from "../affiliate/affiliate.component";

@Component({
  selector: 'app-retention-program',
  standalone: true,
  imports: [CommonModule, AffiliateComponent],
  templateUrl: './retention-program.component.html',
  styleUrl: './retention-program.component.css'
})
export class RetentionProgramComponent {
  WinnerDropdown=false;
  toggleDropdown() {
    this.WinnerDropdown = !this.WinnerDropdown;
  }
}
