import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  currentStep = 1;
  passwordVisible: boolean = false;
  selectedLanguage = 'en';
  isChecked = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')
        ]
      ],
      dob: ['', Validators.required]
    });
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  nextStep() {
    if (this.currentStep < 3){
      this.currentStep++;
    }
  }

  prevStep() {
    this.currentStep--;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.nextStep();
    }
  }

  createAccount() {
    console.log('Account Created:', this.registerForm.value);
  }

  exit() {
    console.log('Registration exited');
  }

}
