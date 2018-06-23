
import { AbstractControl } from '@angular/forms'

export function myRangeValidator(min, max) {
    return function (c: AbstractControl): { [key: string]: boolean } | null {
        let value = c.value
        if (value > min && value < max) return null;
        else return { range: true };
    }
}
export function emailCompare(c: AbstractControl): { [key: string]: boolean } | null {
    let emailControl = c.get('email');
    let cemailControl = c.get('cemail');
    if (emailControl.value === cemailControl.value) {
        console.log(true);
        return null;
    } else {
        return { 'match': true };
    }
}

