function getRow(firstName, lastName, phone) {
    return '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + phone + '</td></tr>'
}

var persons = [
    ['Ionut', 'Buda', '0752319222'],
    ['Nicolae', 'Matei', '0324235235'],
    ['Raluca', 'Ignat', '0766766723']
];
var rows = '';

persons.forEach(function (person) {
    rows += getRow(person[0],person[1],person[2]);
});

function pentruFiecarePers(persons) {
    persons.forEach(function (persons) {
        console.info ("Salut" + person[0])
    })
}

$('#phone-book tbody').html(rows);

var person={
    nume: "Matei",
    prenume: "Nicolae",
    hasJob: true,
    sayHello: function() {
        return "Salut, bine ai venit pe site-ul lui " + this.nume + " " + this.prenume;
    },
    sleep: function() {
        return this.sayHello()+": Yawn..."
    }
}