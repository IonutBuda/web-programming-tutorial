function getRow(firstName, lastName, phone) {
    return '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + phone + '</td></tr>'
}

var persons = [
    ['Ionut', 'Buda', '752319222'],
    ['Nicolae', 'Matei', '324235235'],
    ['Raluca', 'Ignat', '766766723']
];
var rows = '';

persons.forEach(function (person) {
    rows += getRow(person[0],person[1],person[2]);
});

function paySalary(person) {
    console.warn ('Primeste salariul: ' + person[2]);
};

function payBonus(person){
  console.info("Bonus: " + (person[2]*10/100));
};
function forEach(persons, action) {
    console.info("===JOB STARTED===");
    for (var i = 0; i<persons.length; i++) {
        var person = persons[i];
        action(person);
    }
};

forEach(persons,paySalary);
forEach(persons,paySalary);
forEach(persons,paySalary);
forEach(persons,payBonus);

persons.forEach(paySalary);
persons.forEach(payBonus);

$('#phone-book tbody').html(rows);

var person={
    nume: "Matei",
    prenume: "Nicolae",
    hasJob: true,
    sayHello: function() {
        return "Salut, bine ai venit pe site-ul lui "
            + this.nume + " " + this.prenume;
    },
    sleep: function() {
        return this.sayHello()+": Yawn..."
    }
}