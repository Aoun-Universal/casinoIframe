import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-vip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vip.component.html',
  styleUrl: './vip.component.css'
})
export class VipComponent {
tab:any='progress'
closeIt=true

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
  closeModal(){
this.closeIt=false
  }
  constructor(private toggle:ToggleService){}
  closevipModal() {
    this.toggle.setVipModalState(false);
  }
}
