import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  greet() {
    document.write("Hello World");
  }

  displayMessage() {
    alert("Hello world");
  }

  showMessage() {
    alert("Edited text field");
  }
}
