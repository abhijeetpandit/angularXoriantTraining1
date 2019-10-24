import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceHttpService {

  private _url: string = "/assets/data/emps.json"
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
