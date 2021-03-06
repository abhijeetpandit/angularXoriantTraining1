import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  employees = [
    {"id": 10, "name": "Jane", "age": 35},
    {"id": 11, "name": "John", "age": 36},
    {"id": 12, "name": "Andrew", "age": 31},
    {"id": 13, "name": "Anna", "age": 25},
    {"id": 14, "name": "Diana", "age": 22},
  ];

  getEmployees() {
    return this.employees;
  }
  constructor() { }
  
}
