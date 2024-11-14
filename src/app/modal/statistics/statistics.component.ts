import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
tabs='statistics'
modalClose=true
showTabs(tabName:any){
 this.tabs=tabName
}
isDropdownOpen = false;

toggleDropdown(): void {
  this.isDropdownOpen = !this.isDropdownOpen;
}
closeModal(){
this.modalClose=false
}
constructor(private toggle:ToggleService){}
closestatisticModal() {
  this.toggle.setstatisticModal(false);
}
}
