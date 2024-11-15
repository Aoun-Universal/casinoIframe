import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-funds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './funds.component.html',
  styleUrl: './funds.component.css'
})
export class FundsComponent {
    isCopied: boolean = false; // Tooltip visibility flag

    currencies = [
      {
        items: [
          { currencyCode: 'USD', amount: '100.00', isTooltipVisible: false },
          { currencyCode: 'EUR', amount: '200.00', isTooltipVisible: false },
          { currencyCode: 'NGN', amount: '300.00', isTooltipVisible: false }
        ]
      }
    ];
  
    showTooltip(item: any) {
      item.isTooltipVisible = true; // Show the tooltip for the hovered item
    }
    
    hideTooltip(item: any) {
      item.isTooltipVisible = false; // Hide the tooltip for the hovered item
    }
}
