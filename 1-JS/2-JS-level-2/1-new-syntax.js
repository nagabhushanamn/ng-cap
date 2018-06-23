"use strict"

//-------------------------------------------
// -> obj-literal enhancements
//-------------------------------------------

// // ES-5
// var name = "Nag";
// var age = 34

// var person1 = {
//     name: name,
//     age: age,
//     sayName: function () { },
//     'home-address': 'chennai'
// }

// // ES-6
// let dynamicAddrType = 'office'; // home | office | vacation
// let person2 = {
//     name,
//     age,
//     sayName() { },
//     [dynamicAddrType + "-address"]: 'chennai',
//     [1 + 2 + 3 + 4]: 'seven',
//     'say Name'() { }
// };


//-------------------------------------------
// -> spread operator
//-------------------------------------------


// function func(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let nums = [10, 20, 30]
// // func(nums);
// // func(nums[0], nums[1], nums[3]); // manual spread
// // or
// // func(...nums);

// let a1 = [1, 2, 3];
// let a2 = [7, 8, 9];
// let a3 = [...a1, 4, 5, 6, ...a2];

//-------------------------------------------
// -> de-structuring
//-------------------------------------------

// a. object

// let person = {
//     name: 'Nag',
//     age: 34
// };

// let myName = person.name;
// let myAge = person.age;

// or

// let { name: myName, age: myAge } = person;
// let { name: name, age: age } = person;
// or
// let { name, age } = person;

// let name, age;
// ({ name, age } = person);

// b. array

// let nums = [10, 20, 30, 40, 50, 60, [70, 80]];

// let n1=nums[0];
// let n2=nums[1];
// let n3=nums[2];

// or

// let [n1, n2, n3, n4 = 400, , n6, [n7, n8]] = nums;


//-------------------------------------------
// -> symbol-data-type
//-------------------------------------------
/*
    symbol:
        unique & immutable value,
        used as obj's identifier property
*/
//-----------------------------------------------------
// let javaSymbol1 = Symbol.for('java');
// let jsSymbol = Symbol.for('js');


// let e1 = { name: 'A', [javaSymbol1]: 'spring' }
// let e2 = { name: 'B', [jsSymbol]: 'js,ng,react' }

//-----------------------------------------------------

// let menu = ['idly', 'vada', 'poori']

// let newMenu = [...menu, 'biryani'];
// let [m1, m2, m3] = menu;
// for(let item of menu){}

//------------------------------------------------------

// let idMaker = {
//     [Symbol.iterator]: function () {
//         let id = 0;
//         return {
//             next: function () {
//                 id++;
//                 return { value: id <= 10 ? id : undefined, done: id <= 10 ? false : true }
//             }
//         };
//     }
// };

// let ids = [...idMaker];
// let [id1, id2, id3] = idMaker;
// for (let id of idMaker) {
//     console.log(id);
// }

//------------------------------------------------------
// Arrow-function
//------------------------------------------------------

// let getPrice = function () {
//     return 100 + 200;
// }

// arrow-function-syntax

// let getPrice = () => {
//     return 100 + 200;
// }


// let getPrice = (count) => {
//     return count * (100 + 200);
// }

// or

// let getPrice = count => {
//     return count * (100 + 200);
// }

// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }
//or
// let getPrice = (count, tax) => count * (100 + 200) + tax;

// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = cost + tax;
//     return total;
// }



// why/where we need arrow-function ?

/*

    => to make compact function-arg
    => to bound to 'this' ( important )

*/

//--------------------------------------------------
// => to make compact function-arg


// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort(function (a, b) { return a - b });
// or
// nums.sort((a, b) => { return a - b });
// nums.sort((a, b) => a - b);

//--------------------------------------------------

// to bound to 'this' ( important )

// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         // let askQues = function (q) {
//         //     console.log(this.name + " answering " + q);
//         // }
//         // or
//         let askQues = (q) => {
//             console.log(this.name + " answering " + q);
//         }
//         console.log('teaching .js ends');
//         return askQues;
//     }
// };
// let askQues = tnr.doTeach();
// askQues('Q1');
// askQues("Q2")

//--------------------------------------------------