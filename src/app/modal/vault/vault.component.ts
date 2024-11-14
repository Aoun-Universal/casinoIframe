import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-vault',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vault.component.html',
  styleUrl: './vault.component.css'
})
export class VaultComponent {
  tab:any='Deposit'
  
  toggletab(tabname:any){
  this.tab=tabname
  }
  
  dropdownState: string = ''
    dropdown(name:any) {
      if (this.dropdownState === name){
        this.dropdownState = ''
      }else{
        this.dropdownState = name
      }
     
    }
   
    constructor(private toggle:ToggleService){}
    closevipModal() {
      this.toggle.setVaultModalState(false);
    }
}
