import { Component } from '@angular/core';
import { StakeSmartComponent } from '../stake-smart/stake-smart.component';

@Component({
  selector: 'app-responsible-gambling',
  standalone: true,
  imports: [StakeSmartComponent],
  templateUrl: './responsible-gambling.component.html',
  styleUrl: './responsible-gambling.component.css'
})
export class ResponsibleGamblingComponent {

}
