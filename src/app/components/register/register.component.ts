import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { passwordMatchValidator } from '../validators/passwordMatch';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
// export class RegisterComponent {
//   registerForm!: FormGroup;
//   constructor() {}
//   ngOnInit() {
//     this.registerForm = new FormGroup({
//       fullNameTs: new FormControl('', [Validators.required]),
//       userNameTs: new FormControl('', [
//         Validators.required,
//         Validators.pattern(/^\S*$/),
//       ]),
//     });
//   }

//   submitForm() {
//     console.log(this.registerForm);
//   }
// }

// Short Syntax
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        fullNameTs: ['', [Validators.required]],
        userNameTs: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
        emailTs: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            ),
          ],
        ],
        passwordTs: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[a-zA-Z\d@*%$#]+$/
            ),
          ],
        ],
        confirmPasswordTs: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[a-zA-Z\d@*%$#]+$/
            ),
          ],
        ],
      },
      { validator: passwordMatchValidator }
    );
  }

  submitForm() {
    console.log(this.registerForm);
  }
  // // use: registerFormControl.fullNameTs.touched
  // // replaced: registerForm.controls['fullNameTs'].touched
  // get registerFormControl() {
  //   return this.registerForm.controls;
  // }
}
