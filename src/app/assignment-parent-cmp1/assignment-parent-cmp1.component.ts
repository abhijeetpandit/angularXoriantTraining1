import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-parent-cmp1',
  templateUrl: './assignment-parent-cmp1.component.html',
  styleUrls: ['./assignment-parent-cmp1.component.css']
})
export class AssignmentParentCmp1Component implements OnInit {
  userName: string = "Abhijeet";
  password: string = "Pandit1";
  constructor() { }

  ngOnInit() {
  }

}
