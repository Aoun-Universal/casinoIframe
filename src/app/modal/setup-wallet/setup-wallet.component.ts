import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-setup-wallet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './setup-wallet.component.html',
  styleUrl: './setup-wallet.component.css'
})
export class SetupWalletComponent implements OnInit {
    dropdownState = false 
    walletState = false
    stepCount = 1
    counter(){
      if(this.stepCount < 2){
        this.stepCount++ 
      }
    }
  backCount(){
    this.stepCount --;
  }

  toggleDropdown(){
    this.dropdownState = !this.dropdownState
  }
  constructor(private toggle:ToggleService){}
  ngOnInit(): void {
    this.toggle.getWallet().subscribe((value)=>{
      this.walletState = value
    })
  }

  closeModal(){
     this.toggle.setWallet(false);
     this.toggle.setWalletModal(true)
  }

}
