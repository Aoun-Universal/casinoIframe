import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-vip-cloud',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './vip-cloud.component.html',
  styleUrls: ['./vip-cloud.component.css']
})
export class VipCloudComponent implements OnInit {
  isOpen = false;
  token: any;

  toggleAccordion() {
    this.isOpen = !this.isOpen;


  }
  constructor(private auth: AuthService) { }
  ngOnInit(): void {
    this.token = this.auth.isAuthenticated()
  }
}
