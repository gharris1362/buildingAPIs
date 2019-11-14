$(document.body).html('Hello World');

$.getJSON('../api/chirps', (data) => {
    let items = [];
    $.each( data, (key, val) => {
        items.push(`<li><h3>${val.name}: ${val.Chirp}</h3></li>`)  
    })
    $('<ul/>', {
        "class": "my-new-list",
        html: items.join('')
    }).appendTo('body')
}).fail(() => {
    console.log('error')
});