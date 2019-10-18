import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-cmp',
  templateUrl: './interpolation-cmp.component.html',
  styleUrls: ['./interpolation-cmp.component.css']
})
export class InterpolationCmpComponent implements OnInit {

  username:string = "Abhijeet";
  constructor() { }

  ngOnInit() {
  }

  sayHello(): string {
    return "Hello world from method "+ this.username;
  }
}
