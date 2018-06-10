

// using DOM api
// ---------------------
var box = $('.alert');
$('.btn-primary').click((e) => {
    box.show()
});
$('.btn-danger').click((e) => {
    box.hide()
});


// using XHR/fetch api
// ---------------------
$('#todosBtn').click((e) => {
    let apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=3'
    $.ajax(apiUrl, {
        success(resp) {
            $('.jumbotron').text(JSON.stringify(resp))
        }
    });
});