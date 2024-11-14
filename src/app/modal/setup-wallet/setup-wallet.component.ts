import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-setup-wallet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './setup-wallet.component.html',
  styleUrl: './setup-wallet.component.css'
})
export class SetupWalletComponent {
    stepCount = 1
    counter(){
      if(this.stepCount < 2){
        this.stepCount++ 
      }
    }

}
