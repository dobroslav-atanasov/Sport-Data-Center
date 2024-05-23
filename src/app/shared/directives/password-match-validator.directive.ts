import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { passwordMatchValidator } from '../validators/validator';

@Directive({
  selector: '[sdPasswordMatchValidator]'
})

export class PasswordMatchValidatorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return passwordMatchValidator(control);
  }
}
