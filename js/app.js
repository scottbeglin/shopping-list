var containerName = "";
/*function to add items to list by clicking '+'*/
function addItem(containerName) {
    console.log("addItem" + containerName);
}

/*function to delete items from list by clicking 'x'*/
function deleteItem(containerName) {
    console.log("deleteItem" + containerName);

}
/*function to cross off items from list by clicking "checkmark"*/
function crossItem(containerName) {
    console.log("crossItem" + containerName);

}
/*function to delete entire list by clicking 'delete all'*/
function deleteAll(containerName) {
    console.log("deleteAll" + containerName);

}
/*everything is loaded on page load (inside the document ready)*/
$(document).ready(function () {

    /*on click on the "#addItemBreakfast", "#addItemLunch", "#addItemDinner", "addItemSnacks"  button fire the action called addItem()*/
    //$('#addItemBreakfast').on('click', addItem("Breakfast"));
    // $('#addItemLunch').on('click', addItem("Lunch"));
    //$('#addItemDinner').on('click', addItem("Dinner"));
    //$('#addItemSnacks').on('click', addItem("Snacks"));
    $('#addItemBreakfast').on('click', function () {
        addItem("Breakfast")
    });
    $('#addItemLunch').on('click', function () {
        addItem("Lunch")
    });
    $('#addItemDinner').on('click', function () {
        addItem("Dinner")
    });
    $('#addItemSnacks').on('click', function () {
        addItem("Snacks")
    });

    /*on click on the ".deleteAllBreakfast", ".deleteAllLunch", ".deleteAllDinner", ".deleteAllSnacks"  button fire the action called deleteAll()*/
    // $('.deleteAllBreakfast').on('click', deleteAll("Breakfast"));
    // $('.deleteAllLunch').on('click', deleteAll("Lunch"));
    // $('.deleteAllDinner').on('click', deleteAll("Dinner"));
    //  $('.deleteAllSnacks').on('click', deleteAll("Snacks"));
    $('.deleteAllBreakfast').on('click', function () {
        deleteAll("Breakfast")
    });
    $('.deleteAllLunch').on('click', function () {
        deleteAll("Lunch")
    });
    $('.deleteAllDinner').on('click', function () {
        deleteAll("Dinner")
    });
    $('.deleteAllSnacks').on('click', function () {
        deleteAll("Snacks")
    });
});

/*on click on the ".deleteBreakfast", ".deleteLunch", ".deleteDinner", ".deleteSnacks" button fire the action called deleteItem()*/
//$(document).on('click', '.deleteBreakfast', deleteItem("Breakfast"));
//$(document).on('click', '.deleteLunch', deleteItem("Lunch"));
//$(document).on('click', '.deleteDinner', deleteItem("Dinner"));
//$(document).on('click', '.deleteSnacks', deleteItem("Snacks"));
$(document).on('click', '.deleteBreakfast', function () {
    deleteItem("Breakfast")
});
$(document).on('click', '.deleteLunch', function () {
    deleteItem("Lunch")
});
$(document).on('click', '.deleteDinner', function () {
    deleteItem("Dinner")
});
$(document).on('click', '.deleteSnacks', function () {
    deleteItem("Snacks")
});

/*on click on the ".checkboxBreakfast", ".checkboxLunch", ".checkboxDinner", ".checkboxSnacks" button fire the action called crossItem()*/
//$(document).on('click', '.checkboxBreakfast', crossItem("Breakfast"));
//$(document).on('click', '.checkboxLunch', crossItem("Lunch"));
//$(document).on('click', '.checkboxDinner', crossItem("Dinner"));
//$(document).on('click', '.checkboxSnacks', crossItem("Snacks"));
$(document).on('click', '.checkboxBreakfast', function () {
    crossItem("Breakfast")
});
$(document).on('click', '.checkboxLunch', function () {
    crossItem("Lunch")
});
$(document).on('click', '.checkboxDinner', function () {
    crossItem("Dinner")
});
$(document).on('click', '.checkboxSnacks', function () {
    crossItem("Snacks")
});

/*on click on the ".deleteBreakfast", ".deleteLunch", ".deleteDinner", ".deleteSnacks" button fire the action called deleteItem()*/
$(document).on('click', '.deleteBreakfast', deleteItem);
$(document).on('click', '.deleteLunch', deleteItem);
$(document).on('click', '.deleteDinner', deleteItem);
$(document).on('click', '.deleteSnacks', deleteItem);

/*on click on the ".checkboxBreakfast", ".checkboxLunch", ".checkboxDinner", ".checkboxSnacks" button fire the action called crossItem()*/
$(document).on('click', '.checkboxBreakfast', crossItem);
$(document).on('click', '.checkboxLunch', crossItem);
$(document).on('click', '.checkboxDinner', crossItem);
$(document).on('click', '.checkboxSnacks', crossItem);