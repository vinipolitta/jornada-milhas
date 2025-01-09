import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class FormValidations {
  static equalTo(field: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const fieldValue = control.value;
      const otherFieldValue = control.root.get(field)?.value;

      if (fieldValue !== otherFieldValue) {
        return { equalTo: true };
      } else {
        return null;
      }
    };
  }
}
