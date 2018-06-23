import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { CountDisplayComponent } from './count-display/count-display.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { NewEmployeeFormComponent } from './new-employee-form/new-employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionButtonComponent,
    CountDisplayComponent,
    EmployeeFormComponent,
    NewEmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Template-Driven forms
    ReactiveFormsModule // Reactive Forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
