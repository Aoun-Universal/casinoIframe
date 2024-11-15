import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vip-cloud',
  standalone: true,
  imports: [NgIf,NgClass],
  templateUrl: './vip-cloud.component.html',
  styleUrls: ['./vip-cloud.component.css']
})
export class VipCloudComponent {
  isOpen = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
    
  }
}
