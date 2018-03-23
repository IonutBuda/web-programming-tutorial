console.info("page loaded");

var employed = true;
var age = 18;
var firstName = "Ionut";
var lastName = "Buda"
console.info("Name   =" + firstName + " " + lastName);
console.info("Age=  " + age);
console.info("Employed=" + employed)

function getInfo(name) {
    var msg = "Hello " + name + " welcome to FastTrackIT.";
    return msg;
}

var info = getInfo("Ionut");
console.info(info);

function simpleCalc(number1, number2, comision) {

    var total = (number1 + number2) / (1 + comision / 100);
    if (total > 10) {
        return total
    }
    else {
        return "Saracule!"
    }


}

var calc = simpleCalc(15, 16, 1);
console.info(calc)

