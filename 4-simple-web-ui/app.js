

// using DOM api
// ---------------------
let box = document.querySelector('.alert');
let showBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');
hideBtn.addEventListener('click', (e) => {
    box.style.display = 'none';
});
showBtn.addEventListener('click', (e) => {
    box.style.display = '';
});

// using XHR/fetch api
//------------------------
document.getElementById('todosBtn')
    .addEventListener('click', (e) => {
        let apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=3'
        let promise = fetch(apiUrl) // Non-blocking IO
        promise
            .then(response => response.json())
            .then(todos => {
                document.querySelector('.jumbotron').innerText = JSON.stringify(todos)
            })
    });


// Timer API
//------------
// let imgEle = document.getElementById('img');
// let idx = 0;
// setInterval((e) => {
//     idx++;
//     imgEle.src = `./images/${idx}.jpeg`
//     if (idx === 5) idx = 0;
// }, 1000);


