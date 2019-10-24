import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-cmp',
  templateUrl: './reactive-form-cmp.component.html',
  styleUrls: ['./reactive-form-cmp.component.css']
})
export class ReactiveFormCmpComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      uname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]*')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]]
    });
   }

  ngOnInit() {
  }

  get uname() {
    return this.loginForm.get('uname');
  }

  get password() {
    return this.loginForm.get('password');
  }

  display() {
    alert(this.uname.value);
    alert(this.password.value);
  }

}
