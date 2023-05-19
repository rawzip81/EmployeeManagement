import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  
  profileData = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    hireDate: new FormControl(''),
    phoneNumber: new FormControl('')
  });
  
  onSubmit(){
    console.warn(this.profileData.value); 
  }

}
