import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-cmp',
  templateUrl: './directive-cmp.component.html',
  styleUrls: ['./directive-cmp.component.css']
})
export class DirectiveCmpComponent implements OnInit {
  userName: string = "John";
  flag: boolean = false;
  months = ["January","February","March","April","May","June","July",
  "August","September","October","November","December"];
  numbers = [2,4,5,6,7,3, 'd'];
  constructor() { }

  ngOnInit() {
  }

}
