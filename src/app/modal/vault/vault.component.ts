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
  tab='Deposit'
modalclose=true
tooltipopen=false
closeModal(){
  this.modalclose=false
}
toggletolltip(){
this.tooltipopen=!this.tooltipopen
}
toggletab(tabname:any){
this.tab=tabname

}
constructor(private toggle:ToggleService){}
closevaultModal() {
  this.toggle.setVaultModalState(false);
}
}
