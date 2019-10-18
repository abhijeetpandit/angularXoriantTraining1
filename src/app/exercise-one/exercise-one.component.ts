import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.css']
})
export class ExerciseOneComponent implements OnInit {
  firstNum:number;
  secondNum:number;
  sum:number = 0;
  constructor() { }

  ngOnInit() {
  }
  
  calculateSum(): void {
    console.log('firstNum = ' + this.firstNum);
    console.log('secondNum = ' + this.secondNum);
    this.sum = +this.firstNum + +this.secondNum;
  }


}
