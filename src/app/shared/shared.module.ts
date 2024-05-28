import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordMatchValidatorDirective } from './directives/password-match-validator.directive';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    PasswordMatchValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PasswordMatchValidatorDirective
  ],
  providers: [
    MessageService
  ]
})

export class SharedModule { }