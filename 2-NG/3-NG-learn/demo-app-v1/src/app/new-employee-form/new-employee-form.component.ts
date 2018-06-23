import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

import { myRangeValidator, emailCompare } from './my-validators';

@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styleUrls: ['./new-employee-form.component.css']
})
export class NewEmployeeFormComponent {

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {

    // this.employeeForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    //   isIndian: new FormControl(true)
    // });

    // or

    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: [{ value: '', disabled: false }],
      isIndian: { value: true, disabled: true },
      mobile: [''],
      noti: ['email'],
      range: ['', myRangeValidator(10, 20)],
      emailGroup: this.fb.group({
        email: [''],
        cemail: ['']
      }, { validator: emailCompare })
    });

    this.employeeForm.valueChanges
      .subscribe(e => {
        console.log(e)
      })

    this.employeeForm.get('firstName').valueChanges
      .subscribe((e) => {
        console.log(e);
      })
    this.employeeForm.get('firstName').statusChanges
      .subscribe((e) => {
        console.log(e);
      })


  }

  setNoti(mode) {
    let mobileControl = this.employeeForm.get('mobile');
    if (mode === 'sms') {
      mobileControl.setValidators(Validators.required)
    } else {
      mobileControl.clearValidators();
    }
    mobileControl.updateValueAndValidity()
  }

  loadEmployee() {
    //
    let model = { firstName: 'Nag', lastName: 'N' }
    // this.employeeForm.setValue(model);
    this.employeeForm.patchValue(model)

  }


}
