import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-before-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './before-login.component.html',
  styleUrl: './before-login.component.css'
})
export class BeforeLoginComponent {
  dropdownState: string = ''
  dropdown(name:any) {
    if (this.dropdownState === name){
      this.dropdownState = ''
    }else{
      this.dropdownState = name
    }
   
  }
}
