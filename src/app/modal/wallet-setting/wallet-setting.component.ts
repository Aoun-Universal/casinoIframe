import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleService } from '../../services/toggle.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wallet-setting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wallet-setting.component.html',
  styleUrl: './wallet-setting.component.css'
})
export class WalletSettingComponent {
  WalletsettingState = false;
  constructor(
    
    private toggle: ToggleService,
    private router: Router,
    
  ){}
  ngOnInit(): void {
    this.toggle.getWalletsetting().subscribe((value) => {
      this.WalletsettingState = value;
    });
  }
  closeModal() {
    this.toggle.setWalletsetting(false);
  }
}
