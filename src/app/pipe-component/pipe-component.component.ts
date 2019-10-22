import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.css']
})
export class PipeComponentComponent implements OnInit {
  title: string = 'Angular 7 project';
  today: Date = new Date();
  jsonVal = {"name" : "John", "empId": "1212134", "address": "baner"};
  months = ["January","February","March","April","May","June","July",
  "August","September","October","November","December"];
  constructor() { }

  ngOnInit() {
  }

}
