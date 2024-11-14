import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
}
