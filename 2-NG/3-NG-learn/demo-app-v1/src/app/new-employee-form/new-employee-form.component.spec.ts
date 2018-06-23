import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeFormComponent } from './new-employee-form.component';

describe('NewEmployeeFormComponent', () => {
  let component: NewEmployeeFormComponent;
  let fixture: ComponentFixture<NewEmployeeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEmployeeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
