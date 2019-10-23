import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-assignment-child-cmp1',
  templateUrl: './assignment-child-cmp1.component.html',
  styleUrls: ['./assignment-child-cmp1.component.css']
})
export class AssignmentChildCmp1Component implements OnInit {
  @Input() userNameFromParent: string;
  @Input() passwordFromParent: string;
  
  valid: boolean = false;
  
  constructor() { }

  ngOnInit() {
    if(this.userNameFromParent === "Abhijeet" && this.passwordFromParent === "Pandit") {
      this.valid = true;
    }
  }
  

}
