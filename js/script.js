var count = 0;
var count_delete = 0;
let baseUrl = 'https://dummyjson.com';


function GetById() {
    let Id = parseInt(document.getElementById("input").value);
    if (Id <= 100) {
        fetch(`https://dummyjson.com/products/${Id}`)
            .then(p => p.json())
            .then(p => {
                makeTable(p);
            });
    }
    else {
        alert("This Id does not exist");
    }
}

function makeTable(data) {

    if (count != 0) {
        let y = document.getElementById("table");
        y.remove();
    }
    var table = $("<table class='table' />");
    var header = $(`<thead><tr><th>Title</th><th>Brand</th><th>Price</th>
                    </tr></thead>`);
    table.append(header);
    var body = $('<tbody />');
    var tr = $('<tr/>');
    var col = $(`<td>${data.title}</td><td>${data.brand}</td><td>${data.price}</td>`);
    tr.append(col);
    body.append(tr);
    table.append(body);
    $("#product-table").append(table);
    $('table').attr('id', 'table');
    count++;
}

