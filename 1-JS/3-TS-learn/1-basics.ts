
//-----------------------------------------------------
// enum Color { Red, Green, Blue }
// let color: Color;
// color = Color.Blue;
//-----------------------------------------------------
// function func(): void {
//     console.log('ill not return');
// }
// let v=func();
//-----------------------------------------------------
// function func(a: number, b: number, c?: string) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// func(1, 2);
//-----------------------------------------------------


/*
    - wheel  : rotate()
    - car    : move()
*/
//------------------------------------------------------

interface Wheel {
    rotate: () => void
}

//------------------------------------------------------
class MRFWheel implements Wheel {
    constructor() { }
    rotate() {
        console.log('MRFWheel rotating...');
    }
}
//------------------------------------------------------

//------------------------------------------------------
class CEATWheel implements Wheel {
    constructor() { }
    rotate() {
        console.log('CEATWheel rotating...');
    }
}
//------------------------------------------------------
/*
    design & performance issues
    ----------------------------
    -> tight-coupling b/w dependent & dependency..
        => cant extend a module with new-features
    -> too many dependency instances are created & destructed on repeated operation
        => slow, memory & resource use heavy
    -> unit-testing not possible
        => dev & bug-fix slow

      what these issues are happening here ( in car component ) ?

        => dependent  itself creating its own dependency

        soln :

            => dont create dependency in dependent's class, do Lookup at factory

            limitation on lookup:

            => factory-location tight-coupling

            best-soln :

                => dont create/lookup , inject thru 'some-one'  ( IOC )


             how to implement IOC ?
             
                => dependency-injection ( DI )

    ---------------------------------------------------
    S.O.L.I.D. STANDS FOR:
    S — Single responsibility principle
    O — Open closed principle
    L — Liskov substitution principle
    I — Interface segregation principle
    D — Dependency Inversion principle
    ---------------------------------------------------

*/
//------------------------------------------------------
class Car {
    constructor(public wheel: Wheel) { }
    move() {
        this.wheel.rotate();
        console.log('car moving...');
    }
}
//------------------------------------------------------
// some-one / F.W / container  ( NG )
let car: Car = new Car(new CEATWheel());
car.move();
car.wheel = new MRFWheel()
car.move();
//------------------------------------------------------

