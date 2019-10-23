import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-cmp2',
  templateUrl: './child-cmp2.component.html',
  styleUrls: ['./child-cmp2.component.css']
})
export class ChildCmp2Component implements OnInit {
  @Output() public childEvent = new EventEmitter();
  msg: string = "This is message from child component 2";

  call() {
    this.childEvent.emit(this.msg);
  }
  constructor() { }

  ngOnInit() {
  }

}
