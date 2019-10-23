import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-emp-details-cmp',
  templateUrl: './emp-details-cmp.component.html',
  styleUrls: ['./emp-details-cmp.component.css']
})
export class EmpDetailsCmpComponent implements OnInit {


  employees = [];
  constructor(private empService: EmployeeServiceService) { }

  ngOnInit() {
    this.employees = this.empService.getEmployees();
  }

}
