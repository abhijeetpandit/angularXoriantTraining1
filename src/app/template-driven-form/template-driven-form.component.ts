import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  registerUser(form): void {
    alert(form.form.value.uname);
    alert(form.form.value.contact);
    alert(form.form.value.email);
  }
  constructor() { }

  ngOnInit() {
  }

}
