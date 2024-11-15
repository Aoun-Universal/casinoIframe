import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-wallet-modal',
  standalone: true,
  imports: [],
  templateUrl: './wallet-modal.component.html',
  styleUrl: './wallet-modal.component.css'
})
export class WalletModalComponent implements OnInit {
  isModal!: boolean;
  walletState = false
  constructor(private toggle: ToggleService) { }

  ngOnInit(): void {
    this.toggle.getWalletModal().subscribe((state) => {
      this.isModal = state
    })

    this.toggle.getWallet().subscribe((value) => {
      this.walletState = value
    })

  }
  onCloseModal() {
    this.toggle.setWalletModal(false)
  }
  showWallet() {
    this.toggle.setWalletModal(false);
    this.toggle.setWallet(true)
  }
}
