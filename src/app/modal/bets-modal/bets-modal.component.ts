import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-bets-modal',
  standalone: true,
  imports: [],
  templateUrl: './bets-modal.component.html',
  styleUrl: './bets-modal.component.css'
})
export class BetsModalComponent implements OnInit {
  isModal = false
  constructor(private toggle:ToggleService){}
  ngOnInit(): void {
     this.toggle.getBetModal().subscribe((value)=>{
      this.isModal = value
     })
  }
closeModal(){
  this.toggle.setBetModal(false)
}

}
