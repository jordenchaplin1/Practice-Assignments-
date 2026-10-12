//Part 1: if only

function checkDelivery(orderTotal) {
    let freeDelivery = true;
    if (orderTotal >= 30) {
        console.log("Order total: $" + orderTotal + " - Free delivery!");
    } else {
        console.log("Order total: $" + orderTotal + " - Delivery fee applies.");
    }
}

let orderTotal1 = 35;
let orderTotal2 = 22;
let orderTotal3 = 30;

checkDelivery(orderTotal1);
checkDelivery(orderTotal2);
checkDelivery(orderTotal3);

//Part 2: if / else if / else

    function getMenuType(hour) {
        if (hour >= 7 && hour < 11) {
            console.log("Breakfast Menu");
        } else if (hour >= 12 && hour < 16) {
            console.log("Lunch Menu");
        } else if (hour >=17 && hour < 22) {
            console.log("Dinner Menu");
        } else {
            console.log("We are closed.");
        }
    }

    let currentHour1 = 8;
    let currentHour2 = 13;
    let currentHour3 = 19;
    let currentHour4 = 2;

    getMenuType(currentHour1);
    getMenuType(currentHour2);
    getMenuType(currentHour3);
    getMenuType(currentHour4);