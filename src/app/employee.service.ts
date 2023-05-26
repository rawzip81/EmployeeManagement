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
  return this.http.post(baseUrl, data);
}
get(id: number ): Observable<Employee>{
  console.log("Service id: ", id);
  console.log("hello");
  return this.http.get<Employee>(`${baseUrl}/${id}` );
}

deleteEmployee(id: any): Observable<any>{
  return this.http.delete(`${baseUrl}/${id}`);
}

update(id:any, data: any): Observable<any>{
  return this.http.put(`${baseUrl}/${id}`, data);
}

}
