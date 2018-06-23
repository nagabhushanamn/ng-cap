import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employeeModel: any;

  constructor() {
    this.employeeModel = {
      firstName: '',
      lastName: ''
    }
  }
  ngOnInit() {
  }
  loadEmployee() {
    // loading employee model
    this.employeeModel = {
      firstName: 'Nag',
      lastName: 'N'
    }
  }
  saveEmployee(employeeForm) {
    console.dir(employeeForm.value)
    console.dir(this.employeeModel)
  }

}
