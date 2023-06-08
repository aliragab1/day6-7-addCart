import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(
  control: AbstractControl
): ValidationErrors | null {
  const password = control.get('passwordTs');
  const confirmPassword = control.get('confirmPasswordTs');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { passwordMatch: true };
  }

  return null;
}
