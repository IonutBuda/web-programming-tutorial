function getRow(firstName, lastName, phone) {
    return '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + phone + '</td></tr>'
}

var persons = [];

$.get("js/mocks/phone-book.json").complete(function () {
    console.warn("phone book complete",arguments);
});

console.info("Loading persons");

$.ajax({
    url: 'js/mocks/phone-book.json',

        }).done(function (data) {
            console.info("done...",data);
            display(data);

});


function display(persons) {
    var rows = '';

    function createRows(person) {
        rows += getRow(person.firstName,person.lastName,person.phone);
    };



    persons.forEach(createRows);


    $('#phone-book tbody').html(rows);

}