function getRow(firstName, lastName, phone) {
    return '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + phone + '</td></tr>'
}

var persons = [
    getRow('Ionut', 'Buda', '0'),
    getRow('Nicolae', 'Matei', '0324235235'),
    getRow('Raluca', 'Ignat', '0766766723')
];

var rows = '';

persons.forEach(function (person) {
    rows += person;
});

$('#phone-book tbody').html(rows);