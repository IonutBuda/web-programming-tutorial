function getRow(person) {
    return '<tr>' +
        '<td>' + person.firstName + '</td>' +
        '<td>' + person.lastName + '</td>' +
        '<td>' + person.phone + '</td>' +
        `<td>`
        + `<a href="tmp/remove-contact.html?id=${person.id}">&#10008;</a>`
        + "  " + `<a href="#" data-id="${person.id}" class="edit">&#9998;</a></td>` +
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
        '<td><button type="submit" id="buton">Add</button></td>' +
        '</tr>';



    $('#phone-book tbody').html(rows);

    $("#phone-book tbody a.edit").click(function () {
        var id = this.attributes["data-id"].value;
        // var id = $(this).attr("data-id");
        // var id = $(this).data('id');
        console.info("click on", this, id);

        var editPerson = persons.find(function (person) {
            console.log(person.firstName);
            return person.id == id;
        });
        console.warn('edit', editPerson);

        $('input[name=firstName]').val(editPerson.firstName);
        $('input[name=lastName]').val(editPerson.lastName);
        $('input[name=phone]').val(editPerson.phone);
        document.getElementById("buton").innerText = "Save";
    })

}

