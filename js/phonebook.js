function getRow(firstName, lastName, phone) {
    return '<tr>' +
        '<td>' + firstName + '</td>' +
        '<td>' + lastName + '</td>' +
        '<td>' + phone + '</td>' +
        '<td><a href="/tmp/remove-contact.html">x</a></td>' +
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
        rows += getRow(person.firstName, person.lastName, person.phone);
    };


    persons.forEach(createRows);

    rows += '<tr>' +
        '<td><input type="text" name="firstName" required placeholder="Enter first name"></td>' +
        '<td><input type="text" name="lastName" placeholder="Enter last name"></td>' +
        '<td><input type="text" name="phone" required placeholder="Enter phone">' +
        '<button type="submit">Add</button></td>' +
        '</tr>';



    $('#phone-book tbody').html(rows);

}