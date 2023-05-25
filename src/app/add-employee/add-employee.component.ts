import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  
  employee: Employee = {
    firstName:"",
    lastName:"",
    dob:"",
    phoneNumber:"",
    hireDate:"",
  }
  
  submitted = false;
  

  constructor(private employeeService: EmployeeService){
  
  }

  saveEmployee(): void{
    const data = {
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      dob: this.employee.dob,
      phoneNumber: this.employee.phoneNumber,
      hireDate: this.employee.hireDate,
  
    }
    this.employeeService.storeData(data)
    .subscribe({
      next: (data) => {
        console.log(data);
        this.submitted = true;
      },
      error: (e) => console.log(e)
    })
  }
  clearInputData():void{
    this.submitted = false;
    this.employee = {
      firstName:'',
      lastName:'',
      dob: '',
      phoneNumber:'',
      hireDate:''
    }
  }

}
