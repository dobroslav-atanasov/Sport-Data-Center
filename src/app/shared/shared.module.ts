import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordMatchValidatorDirective } from './directives/password-match-validator.directive';

@NgModule({
  declarations: [
    PasswordMatchValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PasswordMatchValidatorDirective
  ]
})

export class SharedModule { }