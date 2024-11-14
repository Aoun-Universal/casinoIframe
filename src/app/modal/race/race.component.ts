import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs';

@Component({
  selector: 'app-race',
  standalone: true,
  imports: [],
  templateUrl: './race.component.html',
  styleUrl: './race.component.css'
})
export class RaceComponent {
  showModal: boolean = false;
  constructor(private toggleService: ToggleService) { }
  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(() => this.updateCountdown());
    this.toggleService.getRaceModalstate().subscribe(value => {
      this.showModal = value;
    });
  }
  closeModal() {
    this.toggleService.setRaceModal(!this.showModal);
  }

  // Timer functionality
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private subscription!: Subscription;

  // Set the target date for the countdown
  private targetDate = new Date('2024-11-20T23:59:59').getTime();

  private updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    // Calculate time left
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If countdown is over, reset values
    if (distance < 0) {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
