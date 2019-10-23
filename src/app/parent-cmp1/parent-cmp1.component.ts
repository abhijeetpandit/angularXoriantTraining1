import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-cmp1',
  templateUrl: './parent-cmp1.component.html',
  styleUrls: ['./parent-cmp1.component.css']
})
export class ParentCmp1Component implements OnInit {
  userName: string = "Smith";
  constructor() { }

  ngOnInit() {
  }

}
