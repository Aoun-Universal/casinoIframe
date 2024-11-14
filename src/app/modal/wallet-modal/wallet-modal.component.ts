import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-wallet-modal',
  standalone: true,
  imports: [],
  templateUrl: './wallet-modal.component.html',
  styleUrl: './wallet-modal.component.css'
})
export class WalletModalComponent implements OnInit{
  isModal!:boolean;
  constructor(private toggle:ToggleService){}

  ngOnInit(): void {
    this.toggle.getWalletModal().subscribe((state)=>{
      this.isModal=state
    })
  }
  onCloseModal(){
    this.toggle.setWalletModal(false)
  }
}
