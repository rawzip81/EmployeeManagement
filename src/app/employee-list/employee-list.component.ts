import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employee?: Employee[];
currentEmployee: Employee = {
  firstName:'',
  lastName:'',
  dob:'',
  phoneNumber:'',
  hireDate: ''
}
showEmployeeDetails=false

ngOnInit(): void {
    this.getAllEmployeesList()
}

constructor(private employeeService: EmployeeService){
}
getAllEmployeesList():void {
  this.employeeService.getAll().subscribe({
    next: (data) => {
      this.employee = data
      console.log(data);
    },
    error: (e) => console.log(e)
  })
}
displayDetails(data: any): void{
  this.showEmployeeDetails=!this.showEmployeeDetails
  this.currentEmployee = data;
}

deleteCurrentEmployee(id: any): void{
  this.employeeService.deleteEmployee(id).subscribe({
    next: (data) => {
      this.employee = data
      this.showEmployeeDetails=false
      this.getAllEmployeesList()
      console.log(data);
    },
    error: (e) => console.log(e)
  })
}

}
