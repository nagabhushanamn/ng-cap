

let Rx = require('rxjs');
let filter = require('rxjs/add/operator/filter');
//-----------------------------------------------------
let stream = Rx.Observable.create((observer) => {
    let i = 0;
    setInterval(() => {
        i++;
        console.log('pushing new data-element into stream');
        observer.next(i);
    }, 2000);
});

//-----------------------------------------------------

// even-num printing module
stream
    .subscribe((result) => {
        console.log("even-module : subscribing-" + result);
    });


//-----------------------------------------------------


//-----------------------------------------------------

// odd-num printing module
stream
    .subscribe((result) => {
        console.log("odd-module : subscribing-" + result);
    });


//-----------------------------------------------------