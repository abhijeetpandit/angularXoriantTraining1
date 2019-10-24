import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { EmpServiceHttpService } from '../emp-service-http.service';

@Component({
  selector: 'app-emp-details-cmp',
  templateUrl: './emp-details-cmp.component.html',
  styleUrls: ['./emp-details-cmp.component.css']
})
export class EmpDetailsCmpComponent implements OnInit {


  employees = [];
  public employeesFromService = [];
  constructor(private empService: EmployeeServiceService, private empHttpService: EmpServiceHttpService) { }

  ngOnInit() {
    this.employees = this.empService.getEmployees();
    this.empHttpService.getEmployees().subscribe(
      data => this.employeesFromService = data
    );
  }

}
