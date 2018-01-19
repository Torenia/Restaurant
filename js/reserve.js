//Reserve the table

function addReserveTimes(timeArray) {

    for (i = 0; i < timeArray.length; i++) {
        var timeForReserve = document.getElementById("free-time");
        var time = document.createElement("p");
        timeForReserve.appendChild(time);
        var reserveTime = document.createTextNode(timeArray[i]);
        time.appendChild(reserveTime);
        time.classList.add("time");
        var timeCheckbox = document.createElement("input");
        timeCheckbox.setAttribute("type", "checkbox");
        timeCheckbox.setAttribute("value", i);
        time.appendChild(timeCheckbox);
        timeCheckbox.classList.add("checkbox");
    }
}

var selectedTable;

$(".table").on("click", loadTable);


function loadTable(evt) {
    $.ajax({ url: "http://localhost:1337/table/" + $(evt.target).attr("data-table") + "/?timestamp=" + Date.now(),
        type: "GET",

        dataType: "json",
        success: function (json) {
            addReserveTimes(json);
        },

        error: function (error) {
            console.error("Server error ");
        }
    });
    $(".time").remove();
    selectedTable = $(evt.target).attr("data-table");
    $(".table").removeClass("table-color");
    $(evt.target).toggleClass("table-color");
}


function selectedCheckbox() {
    var checkboxes = document.querySelectorAll('input:checked');
    return checkboxes[0].value;
}


$("#table-reserve").on("click", reserveTime);

function reserveTime() {

    var name = $("#name").val();
    var phone = $("#phone").val();
    var checkboxes = document.querySelectorAll('input:checked');
    if (selectedTable == null) {
        $("#response").html("Please select a table and reserve time");
        return false;
    }
    else if (checkboxes.length == 0) {
        $("#response").html("Please reserve time");
        return false;
    }
    else if ((name == null || name == "") && (phone == null || phone == "")) {
        $("#response").html("Please enter your name and phone number!");
        return false;
    }
    else if (name == null || name == "") {
        $("#response").html("Please enter your name!");
        return false;
    }
    else if (phone == null || phone == "") {
        $("#response").html("Please enter your phone number!");
        return false;
    }
    else {
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
                $("#response").html(succesResponse);
            },
            error: function () {
                alert("Server error");
            }

        });
    }
}


//Modal window

var modal = document.getElementById("modal-window");

function showModalWindow() {
    modal.style.display = "block";
}

function closeModalWindow() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



