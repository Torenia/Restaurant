//Reserve the table

function addReserveTimes(timeArray) {

    for (i = 0; i < timeArray.length; i++) {
        var timeForReserve = document.getElementById("free-time");
        var divTime =  document.createElement("div");
        var time = document.createElement("p");
        timeForReserve.appendChild(divTime);
        divTime.appendChild(time);
        divTime.classList.add("divTime");
        var reserveTime = document.createTextNode(timeArray[i]);
        time.appendChild(reserveTime);
        time.classList.add("time");
        var timeCheckbox = document.createElement("input");
        timeCheckbox.classList.add("checkbox");
        timeCheckbox.setAttribute("type", "checkbox");
        timeCheckbox.setAttribute("value", i);
        time.appendChild(timeCheckbox);
    }
}

var selectedTable;

$(".table").on("click", loadTable);

function loadTable(evt) {
    $.ajax({
        type: "GET",
        url: "http://localhost:1337/table/" + $(evt.target).attr("data-table"),
        dataType: "json",
        success: function (json) {
            addReserveTimes(json);
        },

        error: function () {
            console.error("Server error");
        }
    });
    $(".time").remove();
    selectedTable = $(evt.target).attr("data-table");
};


function selectedCheckbox() {
    var checkboxes = document.querySelectorAll('input:checked');
    return checkboxes[0].value;
}


$("#table-reserve").on("click", reserveTime);

function reserveTime() {

    $.ajax({
        url: "http://localhost:1337/reserve/",
        method: "POST",

        data: JSON.stringify({
            checked: selectedCheckbox(),
            name: $("#name").val(),
            phone: $("#phone").val(),
            tableNumber: selectedTable
        }),
        success: function (succesResponse) {
            alert(succesResponse);

        },
        error: function () {
            alert("Server error");
        }

    });
}

