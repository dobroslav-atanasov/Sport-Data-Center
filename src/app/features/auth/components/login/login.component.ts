import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserSignIn } from '../../interfaces/user-sign-in';

@Component({
  selector: 'sh-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  serverError: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.serverError = '';
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  get username() {
    return this.loginForm.controls['username'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  signInHandler() {
    this.authService.signIn(this.loginForm.value as UserSignIn)
  }
}
