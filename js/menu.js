//Menu

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "food.xml",
        dataType: "xml",
        success: function (xml) {
            $("<h1 id='menu-food'></h1>").html("Our food menu").appendTo("#food-menu");
            $(xml).find('menu-section').each(function () {
                var name = $(this).find('name').text();
                var food = $("<li class='name-dishes'></li>").html(name).appendTo("#list");
                $(this).find('composition').each(function () {
                    var dish = $("<ul class='dishes'></ul>").appendTo(food);
                    var composition = $("<li class='dishes'></li>").html($(this).text()).appendTo(dish);
                    var prise = $(this).attr('prise');
                    var ulPrise = $("<ul></ul>").appendTo(dish);
                    var liPrise = $("<li class='food-price'></li>").html(prise).appendTo(ulPrise);
                })
            });
        },
        error: function () {
            alert("An error occurred while processing XML file.");
        }
    });
});


$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "drinks.xml",
        dataType: "xml",
        success: function (xml) {
            $("<h1 id='menu-drink'></h1>").html("Our drinks menu").appendTo("#drink-menu");
            $(xml).find('drink').each(function () {
                var nameDrink = $(this).find('name').text();
                var drink = $("<li class='name-drinks'></li>").html(nameDrink).appendTo("#second-list");
                $(this).find('name').each(function () {
                    var priseDrink = $(this).attr('prise');
                    var ulPrise = $("<ul></ul>").appendTo(drink);
                    var liPrise = $("<li class='drink-price'></li>").html(priseDrink).appendTo(ulPrise);
                })
            });
            reapplyHash();
        },
        error: function () {
            alert("An error occurred while processing XML file.");
        }
    });
});


//To go through the anchor link

function reapplyHash() {
    if (window.location.hash) {
        var hash = window.location.hash;
        window.location.hash = "";
        window.location.hash = hash;
    }
}