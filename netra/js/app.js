//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader
// 
$(() => {
    AOS.init();
})
$(() => {

    $('#fileupload').change((event) => {
        var x = URL.createObjectURL(event.target.files[0]);
        $('#imagPlace').attr('src', x);
    });
    $('#fileupload2').change((event) => {
        var x = URL.createObjectURL(event.target.files[0]);
        $('#secondImag').attr('src', x);
    });
});


// table
//function CreateTableFromJSON() {
var myBooks = [{
    "Book ID": "defected",
    "Book Name": "Fire of Wings",
    "Category": "Biography",
    "Price": "100"
}, {
    "Book ID": "confidential",
    "Book Name": "Horrypotter",
    "Category": "Thriller",
    "Price": "1000"
}, {
    "Book ID": "location",
    "Book Name": "Revolution 2020",
    "Category": "Romance",
    "Price": "150"
}, {
    "Book ID": "size",
    "Book Name": "Revolution 2020",
    "Category": "Romance",
    "Price": "150"
}]

var col = [];
for (var i = 0; i < myBooks.length; i++) {
    for (var key in myBooks[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}
// CREATE DYNAMIC TABLE.
var table = document.createElement("table");

var tr = table.insertRow(-1);

for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th"); // TABLE HEADER.
    th.innerHTML = col[i];
    tr.appendChild(th);
}

for (var i = 0; i < myBooks.length; i++) {
    tr = table.insertRow(-1);
    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = myBooks[i][col[j]];
    }
}
var divContainer = document.getElementById("showData");
divContainer.innerHTML = "";
divContainer.appendChild(table);
//}