import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgIf],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
modalOpen=true
closeModal(){
  this.modalOpen=false
}
constructor(private toggle:ToggleService){}
closenotificationModal() {
  this.toggle.setnotificationModal(false);
}
}
