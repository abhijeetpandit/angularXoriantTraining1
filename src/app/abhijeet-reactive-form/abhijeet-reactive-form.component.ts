import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-abhijeet-reactive-form',
  templateUrl: './abhijeet-reactive-form.component.html',
  styleUrls: ['./abhijeet-reactive-form.component.css']
})
export class AbhijeetReactiveFormComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      uname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]*')]],
      pwd: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  }

  login() {
    alert(this.uname.value + ' - ' + this.pwd.value);
  }

  get uname() {
    return this.loginForm.get('uname');
  }
  
  get pwd() {
    return this.loginForm.get('pwd');
  }
}
