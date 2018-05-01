function getRow(person) {
    return '<tr>' +
        '<td>' + person.firstName + '</td>' +
        '<td>' + person.lastName + '</td>' +
        '<td>' + person.phone + '</td>' +
        `<td><a href="/tmp/remove-contact.html?id=${person.id}">x</a></td>` +
        '</tr>'
}

var persons = [];

$.get("js/mocks/phone-book.json").complete(function () {
    console.warn("phone book complete", arguments);
});

console.info("Loading persons");

$.ajax({
    url: 'js/mocks/phone-book.json'

}).done(function (data) {
    console.info("done...", data);
    display(data);

});


function display(persons) {
    var rows = '';

    function createRows(person) {
        rows += getRow(person);
    };


    persons.forEach(createRows);

    rows += '<tr>' +
        '<td><input type="text" name="firstName" required placeholder="Enter first name"></td>' +
        '<td><input type="text" name="lastName" placeholder="Enter last name"></td>' +
        '<td><input type="text" name="phone" required placeholder="Enter phone"></td>' +
        '<td><button type="submit">Add</button></td>' +
        '</tr>';



    $('#phone-book tbody').html(rows);

}