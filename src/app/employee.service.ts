import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './model/employee.model';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/employees'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

getAll() : Observable<Employee[]>{
  return this.http.get<Employee[]>(baseUrl);
}

storeData(data: any): Observable<any>{
  console.log("hello");
  return this.http.post(baseUrl, data);
}

}
