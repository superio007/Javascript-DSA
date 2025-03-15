// Version 1 of the code
// let price = 100000;
// let price = prompt("Enter the price: ");

// if (price <= 5000) {
//     console.log("No discount | Rs. " + price.toFixed(2));
// } else if (price >= 5001 && price <= 7000) {
//     let discount = price -(price * 5 / 100);
//     console.log("5% discount | Rs. " + discount.toFixed);
// } else if (price >= 7001 && price <= 9000) {
//     let discount = price - (price * 10 / 100);
//     console.log("10% discount | Rs. " + discount.toFixed(2));
// } else {
//     let discount = price - (price * 20 / 100);
//     console.log("20% discount | Rs. " + discount.toFixed(2));
// }

// Version 2 of the code

// let price = prompt("Enter the price: ");
// let price = 100000
// function findDiscount(price, discount) {
//     discount = price - (price * discount / 100);
//     return discount.toFixed(2);
// }
// if (price <= 5000) {
//     console.log("No discount | Rs. " + price.toFixed(2));
// } else if (price >= 5001 && price <= 7000) {
//     console.log("5% discount | Rs. " + findDiscount(price, 5));
// } else if (price >= 7001 && price <= 9000) {
//     console.log("10% discount | Rs. " + findDiscount(price, 10));
// } else {
//     console.log("20% discount | Rs. " + findDiscount(price, 20));
// }

// Version 3 of the code

// let price = prompt("Enter the price: ");
let price = 100000
let discount = 0;
function findDiscount(price, discount) {
    discount = price - (price * discount / 100);
    return discount.toFixed(2);
}
if (price <= 5000) {
    discount = 0;
} else if (price >= 5001 && price <= 7000) {
    discount = 5;
} else if (price >= 7001 && price <= 9000) {
    discount = 10;
} else {
    discount = 20;
}
console.log(`${discount}% discount | Rs. ` + findDiscount(price, discount));