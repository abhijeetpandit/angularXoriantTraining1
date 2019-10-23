import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import employees from '../assets/data/emps.json';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceHttpService {

  constructor() { }

  getEmployees(): Observable<any> {
    return null;
  }
}
