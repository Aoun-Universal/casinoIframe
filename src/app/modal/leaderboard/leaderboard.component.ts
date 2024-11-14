import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  showModal: boolean = false;
  constructor(private toggleService: ToggleService) { }
  ngOnInit(): void {
    this.toggleService.getLeaderBoardstate().subscribe(value => {
      this.showModal = value;
    });
  }

  closeModal() {
    this.toggleService.setLeaderBoardModal(!this.showModal);
  }

}
