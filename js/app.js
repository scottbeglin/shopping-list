var containerName = "";
/*function to add items to list by clicking '+'*/
function addItem(containerName) {
    //get the value of the input box
    var itemValue = $('#addItemValue' + containerName).val();

    //validate input
    if (itemValue.length === 0) {
        alert('You have to add something!!!');

    } else {
        //dynamicaly create one row inside the shopping list 
        var row = $('<li><button class="checkbox' + containerName + '">✓</button><span class="list' + containerName + '">' + itemValue + '</span><button class="delete' + containerName + '">x</button></li>');

        //add each row to the previous ones
        $('.shoppingListItems' + containerName).append(row);

        //empty the input box after submit by reseting the value
        itemValue = $('#addItemValue' + containerName).val('');
    }
    console.log("addItem" + itemValue);

}

/*function to delete items from list by clicking 'x'*/
function deleteItem(containerName, element) {
    $(element).parent().remove();
}

/*function to cross off items from list by clicking "checkmark"*/
function crossItem(containerName, element) {
    $(element).parent().wrap("<strike>");
}
/*function to delete entire list by clicking 'delete all'*/
function deleteAll(containerName) {
    $('.shoppingListItems' + containerName).empty();
}
/*everything is loaded on page load (inside the document ready)*/
$(document).ready(function () {

    /*on click on the "#addItemBreakfast", "#addItemLunch", "#addItemDinner", "addItemSnacks"  button fire the action called addItem()*/
    $('#addItemBreakfast').on('click', function () {
        addItem("Breakfast");
    });
    $('#addItemLunch').on('click', function () {
        addItem("Lunch");
    });
    $('#addItemDinner').on('click', function () {
        addItem("Dinner");
    });
    $('#addItemSnacks').on('click', function () {
        addItem("Snacks");
    });

    /*on click on the ".deleteAllBreakfast", ".deleteAllLunch", ".deleteAllDinner", ".deleteAllSnacks"  button fire the action called deleteAll()*/
    $('.deleteAllBreakfast').on('click', function () {
        deleteAll("Breakfast");
    });
    $('.deleteAllLunch').on('click', function () {
        deleteAll("Lunch");
    });
    $('.deleteAllDinner').on('click', function () {
        deleteAll("Dinner");
    });
    $('.deleteAllSnacks').on('click', function () {
        deleteAll("Snacks");
    });
});

/*on click on the ".deleteBreakfast", ".deleteLunch", ".deleteDinner", ".deleteSnacks" button fire the action called deleteItem()*/
$(document).on('click', '.deleteBreakfast', function () {
    deleteItem("Breakfast", this);
});
$(document).on('click', '.deleteLunch', function () {
    deleteItem("Lunch", this);
});
$(document).on('click', '.deleteDinner', function () {
    deleteItem("Dinner", this);
});
$(document).on('click', '.deleteSnacks', function () {
    deleteItem("Snacks", this);
});

/*on click on the ".checkboxBreakfast", ".checkboxLunch", ".checkboxDinner", ".checkboxSnacks" button fire the action called crossItem()*/
$(document).on('click', '.checkboxBreakfast', function () {
    crossItem("Breakfast", this);
});
$(document).on('click', '.checkboxLunch', function () {
    crossItem("Lunch", this);
});
$(document).on('click', '.checkboxDinner', function () {
    crossItem("Dinner", this);
});
$(document).on('click', '.checkboxSnacks', function () {
    crossItem("Snacks", this);
});
