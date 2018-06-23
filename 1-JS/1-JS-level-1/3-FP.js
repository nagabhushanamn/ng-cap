"use strict"

/*

    Functional Programming ( FP )
    ------------------------------
    ==> Function as Value/Object

    how to create function in javascript-lang ?
    
    2-ways

        1. function declaration
              => Named function
              => function-obj created at scope-creation phase
              => always get hoist with function-obj
        2. function expression
              => anonymous function
              => function-obj created at scope-execution phase
              => we can invoke after function-expression

*/

//----------------------------------------------------

// a. function declaration

// console.log(add(12, 13));
// function add(n1, n2) {
// return n1 + n2;
// }
// console.log(add(12, 13));

//----------------------------------------------------

// b. 2. function expression

// console.log(add(12, 13)); //  error
// let add = function (n1, n2) {
//     return n1 + n2;
// }
// // console.log(add(12, 13));

//----------------------------------------------------

//----------------------------------------------------

// e.g

// let userType = "";  // admin || member
// let userAction;
// function login() {
//     userType = "admin"
// }
// login();
// if (userType === "admin") {
//     userAction = function () {
//         console.log('admin-user action..');
//     }
// } else {
//     userAction = function () {
//         console.log('member-user action');
//     }
// }
// userAction();

//----------------------------------------------------
// FP principles
//----------------
/*
Functions as Values
  - STORE functions in variables
  - PASS functions in parameters
  - RETURN functions from other functions
*/
//----------------------------------------------------
// - STORE functions in variables
//----------------------------------------------------

// function greet() {
//     console.log('Hello..');
// }

// let sayHello = greet;
// sayHello();

// let sayHi = function () {
//     console.log('Hi');
// }
// sayHi();

//----------------------------------------------------
// - PASS functions in parameters
//----------------------------------------------------

// function greet(f) {
//     if (f) {
//         f(); return;
//     }
//     console.log('hello..');
// }
// greet();

// // let tnGreet = function () {
// //     console.log('vanakkam');
// // }
// // greet(tnGreet);

// // or

// greet(function () { console.log('vanakkam') });


// // e.g

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// // nums.sort();
// nums.sort(function (a, b) { return a - b });
// console.log(nums);


//----------------------------------------------------
// - RETURN functions from other functions
//----------------------------------------------------

// function teach() {
//     console.log('teaching...js');
//     let learn = function () {
//         console.log('learning..');
//     }
//     console.log('teaching ends..');
//     return learn;
// }
// let learnFunc = teach();
// learnFunc();
// learnFunc();

//----------------------------------------------------

// function params

// function func(a, b) {
//     console.log(a);
//     console.log(b);
//     console.dir(arguments);
// }

// func(10, 20, 30, 40);

// e.g

// function sum() {
//     let len = arguments.length,
//         result = 0,
//         i = 0;
//     while (i < len) {
//         result += arguments[i];
//         i++;
//     }
//     return result;
// }


//----------------------------------------------------

// can we overload function by params ? No

// function getFood() {
//     return "No Food";
// }
// function getFood(pay) {
//     if(arguments.length===0)return "No Food";
//     return "Biryani";
// }
// console.log(getFood());

//----------------------------------------------------
// ES6 => Function with default-params & rest-param
//----------------------------------------------------

// function with default-param
//----------------------------------------------------
// function func(a = 1, b = 2) {

//     // if (!a) a = 1
//     // if (!b) b = 2

//     // a = a || 1;
//     // b = b || 2;

//     console.log(a);
//     console.log(b);
// }
// func(undefined, 20);
//----------------------------------------------------
// function with rest-param
//----------------------------------------------------
// function func(a, b, ...rest) {
//     console.log(a)
//     console.log(b)
//     console.log(rest)
//     console.log(Array.isArray(rest));
// }
// func(1, 2, 3, 4, 5, 6)


//----------------------------------------------------
// function 'closures'
//----------------------------------------------------

/*
    A closure is a function having access to the parent scope,
    even after the parent function has closed.
*/

// function teach(sub) {
//     console.log(`teaching - ${sub}`);
//     let notes = `${sub}-notes`
//     let fun = 'bla bla bla';
//     let learn = function () {
//         console.log(`learning with ${notes}`)
//     }
//     // learn();
//     console.log('teaching ends..');
//     return learn;
// }


// let learnFunc = teach('.js'); // teach-scope with given args & local
// learnFunc();

//----------------------------------------------------

// why /where we need closures ?
/*
    => to abstract public-behav of any module
    => when func executing async, to access parent-scoped data , that callback need to be closure
*/
//----------------------------------------------------

// => to abstract public-behav of any module

/*
    e.g counter-module

        - count
        - doCount()
        - getCount()
*/

// sef-executable function pattern / IIFE  ( module design patern )

// const counter = (function () {
//     let count = 0; // private
//     // public
//     function doCount() {
//         count++;
//     }
//     function getCount() {
//         return count;
//     }
//     return {
//         inc: doCount,
//         get: getCount
//     };
// })();


//----------------------------------------------------
// Function-binding
//----------------------------------------------------

/*

    a. static function-binding
    b. dynamic function-binding

*/
//----------------------------------------------------
// a. static function-binding
//----------------------------------------------------

// let p1 = {
//     name: 'Nag',
//     sayName: function () {
//         console.log('im ' + this.name);
//     }
// };
// let p2 = {
//     name: 'Ria',
//     sayName: function () {
//         console.log('im ' + this.name);
//     }
// };


// function sayNameForAll() {
//     console.log('im ' + this.name);
// }
// let p1 = { name: 'Nag', sayName: sayNameForAll }
// let p2 = { name: 'Ria', sayName: sayNameForAll }

// // sayNameForAll(); // im ?? // Error , becox , this.name cause TypeError
// p1.sayName(); // im Nag
// p2.sayName(); // im Ria


//----------------------------------------------------
// a. dynamic function-binding
//----------------------------------------------------


// let p = { name: 'Nag' };
// let e = { name: 'cap' };


// let greetLib = {
//     sayName: function (message, from) {
//         console.log(message + ' im ' + this.name + " : " + from);
//     }
// }
// // greetLib.sayName();

// way-1 : call()
// greetLib.sayName.call(p, "hello", "bengalore")
// greetLib.sayName.call(e, 'hey', "chennai")

// way-3 : apply()
// greetLib.sayName.apply(p, ["hello", "bengalore"])
// greetLib.sayName.apply(e, ['hey', "chennai"])

// way-3 : bind()
// let personSayName = greetLib.sayName.bind(p, "hello", "bengalore")
// personSayName();
// personSayName();
// let empSayName = greetLib.sayName.bind(e);
// empSayName('dude', 'blr');
// empSayName('hi', 'chn');

//----------------------------------------------------
// function-binding ==> summary

// let func = function () {
//     console.log(this);
// }
// func(); 
// let o1 = { name: 'A', func: func }; // static function-binding
// o1.func();

// let o2 = { name: 'B' }
// func.call(o2); // dynamic function-binding

//----------------------------------------------------
// Quiz
// let pName = "global";
// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         let pName = "local";
//         console.log('im ' + pName); // scope's hirarcy data
//         console.log('im ' + person.pName); // referencing obj's data
//         console.log('im ' + this.pName); // scope's owner data
//     }
// }
// person.sayName();

// let oldPerson = person;
// person = { pName: 'Ria' };
// oldPerson.sayName();

//----------------------------------------------------
// in .javascript-lang , we can invoke functions in 3 ways
/*
    1. function-invocation ( this ==> undefined )
    2. method or static-function-binding ( this ==> invoker-obj )
    3. call/apply/bind  or dynamic-function-binding ( this ==> arg-obj)

*/
//----------------------------------------------------
// Quiz

// const tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teching .js");
//         let notes = ".js-notes";
//         let self = this;
//         let doLearn = function () {
//             console.log(this.name + " learning  from " + self.name);
//         }
//         console.log('teaching ends');
//         return doLearn;
//     }
// };
// let emp = { name: 'cap' }
// // today
// let learnFunc = tnr.doTeach();
// learnFunc.call(emp)
// //tomorrow
// let tempTnr = { name: 'Praveen' }
// learnFunc = tnr.doTeach.call(tempTnr)
// learnFunc.call(emp);

//----------------------------------------------------



