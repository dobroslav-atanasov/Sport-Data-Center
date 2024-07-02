import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordMatchValidatorDirective } from './directives/password-match-validator.directive';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    PasswordMatchValidatorDirective
  ],
  imports: [
    CommonModule,
    ToastModule,
  ],
  exports: [
    PasswordMatchValidatorDirective
  ],
  providers: [
    MessageService
  ]
})

export class SharedModule { }