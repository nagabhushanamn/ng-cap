

// ES5

var myFunctions = [];
var menu = ['idly', 'vada', 'poori']
//----------------------------------------------

function getF(i, item) {
    var f = function () {
        console.log(i + "->" + item);
    }
    return f;
}

for (var i = 0; i < menu.length; i++) {
    var item = menu[i];
    myFunctions.push(getF(i, item));
}
//----------------------------------------------
myFunctions[0]();
myFunctions[1]();
myFunctions[2]();