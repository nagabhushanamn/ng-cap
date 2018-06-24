import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router'

@Injectable()
export class StateCheckGuardService implements CanDeactivate<any> {

  constructor() { }

  canDeactivate() {
    return window.confirm('Are u sure?') ? true : false;
  }

}
