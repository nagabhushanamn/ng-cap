
console.log('-main.js-');


//------------------------------------------
// var global = global || {};
// global.mod1.doWork();
//------------------------------------------

// common-js module standard
var greetMod = require('cap-june-greet');
greetMod.greet('tn');

//------------------------------------------
// es module standard

// import { item1, item2 } from './hotel/menu';
// import { item1 as nonVeg, item2 as vegItem } from './hotel/menu';
// import * as items from './hotel/menu';
// import { item1 } from './hotel/menu';
// item1 = null// error
// item1.price = 100;


// import mainItem, { softDrink1, softDrink2 } from './hotel/menu';
//---------------------------------------------------


