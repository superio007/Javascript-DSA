let amount = 6000;
let FiveHundred = 0;
let TwoHundred = 0;
let OneHundred = 0;
let Fifty = 0;
let Twenty = 0;
let Ten = 0;
let Five = 0;
let coins = 0;


if (amount >= 500) {
    FiveHundred = Math.floor(amount / 500);
    amount = amount % 500;
}
if (amount >= 200) {
    TwoHundred = Math.floor(amount / 200);
    amount = amount % 200;
}
if (amount >= 100) {
    OneHundred = Math.floor(amount / 100);
    amount = amount % 100;
}
if (amount >= 50) {
    Fifty = Math.floor(amount / 50);
    amount = amount % 50;
}
if (amount >= 20) {
    Twenty = Math.floor(amount / 20);
    amount = amount % 20;
}
if (amount >= 10) {
    Ten = Math.floor(amount / 10);
    amount = amount % 10;
}
if (amount >= 5 && amount < 10) {
    Five = Math.floor(amount / 5);
    amount = amount % 5;
}
if (amount >= 1 && amount < 5) {
    coins = amount;
}

console.log(`Initial state: FiveHundred=${FiveHundred}, TwoHundred=${TwoHundred}, OneHundred=${OneHundred}, Fifty=${Fifty}, Twenty=${Twenty}, Ten=${Ten}, Five=${Five}, coins=${coins}`);