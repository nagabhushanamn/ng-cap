(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

console.log('-main.js-');


//------------------------------------------
// var global = global || {};
// global.mod1.doWork();
//------------------------------------------



var greetMod=require('cap-june-greet');
greetMod.greet('tn');
},{"cap-june-greet":3}],2:[function(require,module,exports){
// //-----------------------------------------
//  var o = {
//     doWork() {
//         console.log('im mod2');
//     }
// };
//-----------------------------------------
// var global = global || {};
// (function () {
//     global.mod3.doWork();
//     var o = {
//         doWork() {
//             console.log('im mod2');
//         }
//     };
//     global.mod2 = o;
// })();
//-----------------------------------------
console.log('-greet/en.js-');
function greet() {
    console.log('hello..');
}
module.exports = greet;
},{}],3:[function(require,module,exports){
// //-----------------------------------------
//  var o = {
//     doWork() {
//         console.log('im mod1');
//     }
// };
//-----------------------------------------
// var global = global || {};
// (function () {
//     var i=100;
//     global.mod2.doWork();
//     var o = {
//         doWork() {
//             console.log('im mod1');
//         }
//     };
//     global.mod1 = o // export
// })();
//-----------------------------------------

console.log('-greet/index.js-');
let en = require('./en');
let tn = require('./tn');
function greet(lang) {
    if (lang === "en") {
        en(); return;
    }
    if (lang === "tn") {
        tn(); return;
    }
    console.log('give me ur, then ill greet u');
}

module.exports = {
    greet
};
},{"./en":2,"./tn":4}],4:[function(require,module,exports){
// //-----------------------------------------
//  var o = {
//     doWork() {
//         console.log('im mod1');
//     }
// };
//-----------------------------------------
// var global = global || {};
// (function () {
//     var o = {
//         doWork() {
//             console.log('im mod3');
//         }
//     };
//     global.mod3 = o;
// })();
// //-----------------------------------------
console.log('-greet/tn.js-');
function greet() {
    console.log('vanakkam..');
}
module.exports = greet;
},{}]},{},[1]);
