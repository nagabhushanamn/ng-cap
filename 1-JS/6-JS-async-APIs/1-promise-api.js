

// swiggy-module ( service )
//-------------------------------------------
let swiggy = {
    getFood: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                setTimeout(() => {
                    console.log('swiggy resolve/reject promise');
                    resolve('biryani..'); // event
                    //reject('biryani not available');
                }, 3000);
            }, 3000);
        });
        return promise;
    }
};


//-------------------------------------------

// bar-module ( service )
//-------------------------------------------
let bar = {
    getDrink: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('bar resolve/reject promise');
                resolve('BEER..'); // event
                //reject('No BEER..'); // event
            }, 2000);
        });
        return promise;
    }
};
//-------------------------------------------


// person-module ( UI | service )
//-------------------------------------------

let person = {
    doWork: function () {
        console.log('person working...');
        console.log('person feels hungry...requesting food on swiggy-module');
        let promise1 = swiggy.getFood();
        //let promise2 = bar.getDrink();
        console.log('person got promise, defer my action to future');
        let newPromise = Promise.race([promise1])
            .then((response) => {
                console.log('yummy with half biryani')
                return "half-biryani"
            }, (error) => {
                console.log('oopps ' + error);
            });

        newPromise.then(result => {
            console.log('having ' + result);
        });
        
        console.log('person cont with other work....... ends');
    }
};

person.doWork();
//-------------------------------------------