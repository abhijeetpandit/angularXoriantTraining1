import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees = [];
  constructor(private empService: EmployeeServiceService) { }

  ngOnInit() {
    this.employees = this.empService.getEmployees();
  }

}
