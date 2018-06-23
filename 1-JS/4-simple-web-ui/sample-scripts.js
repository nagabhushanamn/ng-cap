

// //1.

// function foo(b) {
//     var a = 10;
//     return a + b + 11;
// }

// function bar(x) {
//     var y = 3;
//     return foo(x * y);
// }

// console.log(bar(7)); //returns 42

//-------------------------------------

//2.
// function foo(){}
// function bar(){foo()}
// function baz(){bar()}
// baz();

//-------------------------------------
// 3.
// function foo(){throw new Error('oops')}
// function bar(){foo()}
// function baz(){bar()}
// baz();
//-------------------------------------
// 4.
// function foo(){foo()}
// foo()
//-------------------------------------
5.
// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         console.log('leave me.. today sunday..');
//         i++;
//     }
// }
// function shortRunning() {
//     console.log('short running..');
// }
// longRunning();
// shortRunning();

//-------------------------------------

// 6. 


/*

<button class="veg">Veg</button>
<button class="non-veg">Non-Veg</button>

*/

console.log('starting..');

$.on('.veg','click',function vegHandler(e){
    console.log('handling event on .veg elements');
});

$.on('.non-veg','click',function nonVegHandler(e){
    console.log('handling event on .non-veg elements');
});

console.log('cont..with other work..');
function longRunning() {
    var i = 0;
    while (i < 10) {
        console.log('leave me.. today sunday..');
        i++;
    }
}
longRunning();

//-------------------------------------

// 7.

// console.log('starting...');

// // IO
// setTimeout(function timeoutCallback(){
//     console.log('after timeout.., e.g consume IO result');
// },1000);
// console.log('cont with other work..');
// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         console.log('leave me.. today sunday..');
//         i++;x
//     }
// }
// longRunning();
