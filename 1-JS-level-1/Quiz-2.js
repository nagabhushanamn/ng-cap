

// ES5

var myFunctions = [];
var menu = ['idly', 'vada', 'poori']
//----------------------------------------------
for (var i = 0; i < menu.length; i++) {
    var item = menu[i];
    var f = function () {
        console.log(i + "->" + item);
    }
    myFunctions.push(f);
}
//----------------------------------------------
myFunctions[0]();
myFunctions[1]();
myFunctions[2]();