import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
        return null;
    }

    return password.value === confirmPassword.value ? null : { passwordMatch: true };
}

export const passwordNonAlphanumericValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.value as string;

    if (!password) {
        return null;
    }

    const isValid = /[^a-zA-Z\d\s:]/.test(password);
    return isValid ? null : { nonAlphanumeric: true };
}

export const passwordUpperCaseValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.value as string;

    if (!password) {
        return null;
    }

    const isValid = /[A-Z]/.test(password);
    return isValid ? null : { upperCase: true };
}

export const passwordLowerCaseValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.value as string;

    if (!password) {
        return null;
    }

    const isValid = /[a-z]/.test(password);
    return isValid ? null : { lowerCase: true };
}