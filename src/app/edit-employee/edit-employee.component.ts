import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{

  currentEmployee: Employee ={}
  message: String = '';
 
  constructor ( private employeeService: EmployeeService,
                private route: ActivatedRoute,
                private router: Router
    ){}

  ngOnInit(): void {
    this.message = '';
    const id = this.route.snapshot.params["id"]
    console.log("Id: ", id);
    this.getEmployeeById(id); 
  }
  getEmployeeById(id: any): void {
    this.employeeService.get(id).subscribe({
      next: (data:Employee) => {
    this.currentEmployee = data;
    console.log(data);
  },
  error: (e) => console.error(e)
    });
  }
  
  updateEmployee(): void {
    this.message = '',
    console.log("Update tutorial:", this.updateEmployee);
    this.employeeService.update(this.currentEmployee.id, this.currentEmployee).subscribe({
      next:(data) =>{
        this.router.navigate(['/']);
        this.message = data.message ? data.message : 'Employee has been successfully updated'
      },
      error: (e) => console.error(e)
    });
  }



}
