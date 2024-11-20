import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  ForgotpasswordState = false;
  constructor(
    
    private toggle: ToggleService,
    private router: Router,
    
  ){}
  ngOnInit(): void {
    this.toggle.getForgotpassword().subscribe((value) => {
      this.ForgotpasswordState = value;
    });
  }
  closeModal() {
    this.toggle.setForgotpassword(false);
  }
}
