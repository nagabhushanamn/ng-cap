
/*
-------------------------------------------------------
    data-types:

        1. simple / primitive  ==> values
            a. string
            b. number
            c. boolean
            d. undefined
        2. complex / reference ==> objects
-------------------------------------------------------    
*/


// ---------------------------------------------------------
// 1. simple / primitive  ==> values
// ---------------------------------------------------------
// a. string

var name = "Nag";
var selection = 'abc';

// var dynamicString = "the trainer " +( name )+ " , teaching .js";
// or
// es6 ==> string-interpoltion
var dynamicString = `the trainer ${'Mr.' + name}, teaching .js`;
var multiLine = `
    <div>
        <h1>${name}</h1>
    </div>

`;

// ---------------------------------------------------------
// b. Number

var count = 12;
var cost = 12.12;

// ---------------------------------------------------------
// c. boolean

var found = true;

// imp-note : falsy values ==> false,0,"",null,undefined,NAN
// ref : https://dorey.github.io/JavaScript-Equality-Table/


// ---------------------------------------------------------
// d. undefined

var v;

// ---------------------------------------------------------




// ---------------------------------------------------------
// 2. reference   ==> objects
// ---------------------------------------------------------


/*

    how to create instance ?
    syntax:
    var ref=new Constructor();

    imp-note:

        => by default, all .js-objects are extensible & configurable

*/
//------------------------------------------------------
// var config = new Object();
// config.url = "http://";
// config.httpMethod = "GET";
// config.onSuccess = function () {
//     console.log('im running on success');
// }
// delete config.httpMethod;

//------------------------------------------------------


// ---------------------------------------------------------
// literal-style objects i.e obj can create with 'new' keyword
// ---------------------------------------------------------

// a. Object

var config = new Object();
config.url = "http://";
config.httpMethod = "GET";
config.onSuccess = function () {
    console.log('im running on success');
}
// or
var newConfig = {
    url: 'http://',
    httpMethod: 'GET',
    onSuccess: function () { }
};

// ---------------------------------------------------------

// b. Array / List collection

var arr = new Array();
arr.push('idly');
arr[1] = "vada";
arr.push('poori');
// or
var newArr = ["idly", "vada", 'poori'];


// ---------------------------------------------------------
// c. RegExp

var adharPattern = new RegExp('\\d{4}-\\d{4}-\\d{4}');
// or
var newAdharPattern = /\d{4}-\d{4}-\d{4}/;


// ---------------------------------------------------------
// d.Function

var add = new Function("n1", "n2", "var r=n1+n2;return r;");
// or
function newAdd(n1, n2) {
    var r = n1 + n2;
    return r;
}

// ---------------------------------------------------------


// how to access obj's properties ?

// How to access obj's properties ?
/*
    in 2 ways
    -> . notation , if propert is valid indenfier
    else
    -> [] notation
*/

/*


var person = {
    name: 'Nag',
    'home-address': 'chennai',
    1: 'one',
    100: 'hundred'
};

person.name = "Nag N";
console.log(person.name);

person['home-address'] = 'bengalore';
console.log(person["home-address"]);

console.log(person[100]);


// ---------------------------------------------------------

