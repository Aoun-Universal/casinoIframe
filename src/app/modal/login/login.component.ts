import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToggleService } from '../../services/toggle.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ForgotPasswordComponent ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Corrected to styleUrls
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordVisible: boolean = false;
  loginState = false;
  step = 1;

  constructor(
    private fb: FormBuilder,
    private toggle: ToggleService,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      emailOrName: ['', [Validators.required, Validators.minLength(3)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')
        ]
      ]
    });
  }

  login() {
    const emailOrName = this.loginForm.get('emailOrName')!.value;
    const password = this.loginForm.get('password')!.value;
    console.log('gmail', emailOrName);
    console.log(password);
    if (emailOrName === 'admin@gmail.com' && password === 'Abcd1234@') {
      this.authService.login();
      this.router.navigateByUrl('/home').then(() => {
        window.location.reload(); 
      });
      this.toggle.setLogin(false);
    } else {
      this.router.navigateByUrl('/');
      console.log('Login failed');
    }
  }


  ngOnInit(): void {
    this.toggle.getLogin().subscribe((value) => {
      this.loginState = value;
    });
  }

  closeModal() {
    this.toggle.setLogin(false);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  nextStep() {
    if (this.step < 3) {
      this.step += 1;
    }
  }

  showforgotpassword() {
    this.toggle.setForgotpassword(true)
  }
}
