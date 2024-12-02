import {CommonModule, Location} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToggleService } from '../../services/toggle.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  isPhone = true
  isCode = true
  registerForm: FormGroup;
  currentStep = 1;
  passwordVisible: boolean = false;
  selectedLanguage = 'en';
  isChecked = false;
  signUpState = false

  constructor(private fb: FormBuilder, private toggle:ToggleService,private location:Location) {
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
    this.currentStep++;
  }

  prevStep() {
    this.currentStep--;
  }
  ngOnInit(): void {
     this.toggle.getSignUp().subscribe((value:boolean)=>{
       this.signUpState = value
     })
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

  togglePhone() {
    this.isPhone = !this.isPhone
  }

  toggleCode(){
    this.isCode = !this.isCode
  }



  closeModal(){
  this.toggle.setSignUp(false);
  this.location.back();
  }


}
