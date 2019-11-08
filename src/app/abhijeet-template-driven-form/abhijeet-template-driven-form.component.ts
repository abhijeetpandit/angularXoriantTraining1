import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abhijeet-template-driven-form',
  templateUrl: './abhijeet-template-driven-form.component.html',
  styleUrls: ['./abhijeet-template-driven-form.component.css']
})
export class AbhijeetTemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerUser(frm) {
    alert(frm.form.value.fname + ' - ' + frm.form.value.lname + ' - ' + frm.form.value.email + ' - ' + frm.form.value.phno);
  }

}
