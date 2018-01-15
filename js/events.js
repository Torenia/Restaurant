//Events

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "events.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('event').each(function () {
                var caption = $(this).find('caption').text();
                var eventCaption = $("<h3 class='event-caption'></h3>").html(caption).appendTo("#events");
                var description = $(this).find('description').text();
                var paragraphDescription = $("<p></p>").html(description).appendTo("#events");
            });
            reaplyHash();
        },
        error: function () {
            alert("An error occurred while processing XML file.");
        }
    });
});


//To go through the anchor link

function reaplyHash() {
    if (window.location.hash) {
        var hash = window.location.hash;
        window.location.hash = "";
        window.location.hash = hash;
    }
}