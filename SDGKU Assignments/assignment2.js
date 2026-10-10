//Part 1 — A function with no parameters
function showRestaurantName(){
    console.log("Welcome to La Cantina");
}

//Part 2 — A function with one parameter
showRestaurantName();

function greetCustomer(name){
    console.log("Welcome" + " " + name + "!" + " " + "We are happy to have you at La Cantina.");
}

let customerName = "Maria";
greetCustomer(customerName);

let customerName2 = "James";
greetCustomer(customerName2);

let customerName3 = "Sofia";
greetCustomer(customerName3);

//Part 3 — A function with two parameters that returns a value

function calculateTotal(price, taxRate){
    let total = price + (price * taxRate);
    return total;

}
let itemName = "Tacos al pastor";
let itemPrice = 10.00;
let taxRate = 0.08;
let totalPrice = calculateTotal(itemPrice, taxRate);
console.log(itemName +" - Total with tax: " + " $" + totalPrice.toFixed(2) + ".");

function calculateTotal(price, taxRate){
    let total = price + (price * taxRate);
    return total;

}

let itemName2 = "Enchiladas verdes";
let itemPrice2 = 12.50;
let taxRate2 = 0.08;
let totalPrice2 = calculateTotal(itemPrice2, taxRate2);
console.log(itemName2 +" - Total with tax: " + " $" + totalPrice2.toFixed(2) + ".");

let itemName3 = "Agua Fresca";
let itemPrice3 = 3.00;
let taxRate3 = 0.08;
let totalPrice3 = calculateTotal(itemPrice3, taxRate3);
console.log(itemName3 +" - Total with tax: " + " $" + totalPrice3.toFixed(2) + ".");
console.log(itemName2 +" - Total with tax: " + " $" + totalPrice2.toFixed(2) + ".");