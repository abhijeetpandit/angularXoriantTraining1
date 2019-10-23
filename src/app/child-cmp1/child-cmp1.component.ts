import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-cmp1',
  templateUrl: './child-cmp1.component.html',
  styleUrls: ['./child-cmp1.component.css']
})
export class ChildCmp1Component implements OnInit {

  @Input() userNameFromParent: string;
  constructor() { }

  ngOnInit() {
  }

}
