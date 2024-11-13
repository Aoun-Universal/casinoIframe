import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-tennis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-tennis.component.html',
  styleUrl: './all-tennis.component.css'
})
export class AllTennisComponent {
  nestedAccCards=[1,2,3,4]
  accCards=[1,2,3,4,5,6]
  isAcc:boolean=false;
  isNestedAcc:boolean=false;
  toggleAcc(){
    this.isAcc=!this.isAcc
  }
  toggleNestedAcc(){
    this.isNestedAcc=!this.isNestedAcc
  }
}
