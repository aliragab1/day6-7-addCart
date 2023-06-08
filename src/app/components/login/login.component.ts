import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  submitProductForm(form: any) {
    console.log(form);
    // console.log(form.value);
  }
}
