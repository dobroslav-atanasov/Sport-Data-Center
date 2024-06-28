import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordLowerCaseValidator, passwordMatchValidator, passwordNonAlphanumericValidator, passwordUpperCaseValidator } from '../../../../shared/validators/validators';
import { AuthService } from '../../services/auth.service';
import { NotificationsService } from '../../../../shared/services/notifications.service';

@Component({
  selector: 'sh-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  registerForm: FormGroup;
  serverError: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notificationsService: NotificationsService
  ) {
    this.serverError = '';
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), passwordNonAlphanumericValidator, passwordUpperCaseValidator, passwordLowerCaseValidator]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: passwordMatchValidator });
  }

  get username() {
    return this.registerForm.controls['username'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  signUpHandler() {
    this.authService
      .signUp(this.registerForm.value)
      .subscribe({
        next: (res) => {
          this.notificationsService.showSuccess(res.message);
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          this.serverError = err.error.message;
          this.notificationsService.showError(err.error.message);
        }
      })
  }
}