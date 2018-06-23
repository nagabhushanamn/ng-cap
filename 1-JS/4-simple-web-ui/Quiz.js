


function jsTeach() {
    let name = "Nag"; // will get move to heap for closures.
    let fun = "bla bla";
    try {
        console.log(name + ' teaching javascript');
        //throw new Error('hate .js');
        setTimeout(() => {
            console.log(name + ' teaching NG');
            //throw new Error('hate ng');
            console.log('teaching NG ends');
        }, 5000);
        console.log('teaching javascript ends');
    } catch (e) {
        console.log('caught ' + e.message);
    }
}
jsTeach();