
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
        if (person[2]>200) {
            action(person);
        }
    }
};

forEach(persons,paySalary);
forEach(persons,paySalary);
forEach(persons,paySalary);
forEach(persons,payBonus);

persons.forEach(paySalary);
persons.forEach(payBonus);