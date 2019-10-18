import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-cmp',
  templateUrl: './twoway-cmp.component.html',
  styleUrls: ['./twoway-cmp.component.css']
})
export class TwowayCmpComponent implements OnInit {
  uname: string = "Hello";
  constructor() { }

  ngOnInit() {
  }

}
