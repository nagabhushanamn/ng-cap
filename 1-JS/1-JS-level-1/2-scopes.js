"use strict"

/*

    scope / execution-context
    --------------------------
    memory / stack-frame with given args & local
    to execute function in seq.

    phase-1 : creation / push
               => any variable declared with 'var' keyword any-where in function,
                  will get hoisted with default-value ( undefined )  
    phase-2 : execution / pop
              => function-instructions exe in seq  


    ------------------------------------------
    every javascript-runtime ,
    by default, has one global-scope by default
    ------------------------------------------    
    every function-invocation also creates new-scope,
    which is child of in-which scope that function has created/declared
    ------------------------------------------    
*/

//----------------------------------------------------

// console.log(v);
// var v=12;

//----------------------------------------------------

// var v = 12;
// function f1() {
//     console.log(v);
//     var v = 13;
// }
// f1(); // f1-scope <== global-scope

//----------------------------------------------------

// Quiz

// var v = 12;
// function f1() {
//     function f2() {
//         console.log(v);
//     }
//     f2();
//     var v = 13;
// }
// f1();

//----------------------------------------------------

// var v = 12;
// var v = 13;

//----------------------------------------------------

// var v=100;
// if(true){
//     var v=200;
// }
// console.log(v);

//----------------------------------------------------
/*
 problems with 'var' keyword:
    => variables always get hoist
    => we can re-declare same variable within scope
    => no block-scope

    soln : using 'let' & 'const' keywords from ES6  wit block-scope
*/
//----------------------------------------------------

// console.log(v);
// let v=12;
//----------------------------------------------------
// let v=13;
// var v=12;
//----------------------------------------------------
// var v=100;
// if(true){
//     let v=200;
// }
// console.log(v);
//----------------------------------------------------

// const v=100;
// v=200;

// const person = { name: 'Nag', age: 32 }
// person={}; // error
// person.age = 34

//----------------------------------------------------

//---------------------------------------------------
// summary
/*
    use , 'let' for mutable reference variable,
    use , 'const' for immutable reference variable
    best practice : avoid using 'var' keyword
*/
//---------------------------------------------------

// Quiz


// function func() {
//     v = 100;
// }
// func();
// console.log(v);