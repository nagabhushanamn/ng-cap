

//ES-5 ==> class

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }

// var p1 = new Person('Nag', 34);
// var p2 = new Person('Ria', 3);

//------------------------------------------------

// ES6 ==> class ( new way of OO in .javascript)

/*

    obj creation is 2 step process

    step-1 : dyanamic memory allocation ==> new
    step-2 : initialize memory with obj's data ==> constructor

*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Person :: constructor()');
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age + " old");
    }
}
// var p = new Person('Nag', 34);

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        console.log('Employee :: constructor()');
    }
    saySalary() {
        console.log('i get ' + this.salary + " only");
    }
    getBonus() {
        return this.salary * 0.02;
    }
}

// let emp = new Employee('Nag', 34, 1000.00)

class Boss extends Employee {
    getBonus() {
        return this.salary * 0.2 + super.getBonus();
    }
}

let boss = new Boss('Nag', 34, 1000);

//-------------------------------------------------

class Abc {
    constructor() {
        this.insVar1 = 0;
    }
    static staMethod() {
    }
    insMethod() {
    }
}
Abc.staVar = 0;

//-------------------------------------------------