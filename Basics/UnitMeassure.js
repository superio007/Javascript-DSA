let unit = 700;
let remaining =0;   
let totalPrice = 0;
if (unit > 400) {
    remaining = unit - 400;
    totalPrice = totalPrice + remaining * 13;
    unit = unit - remaining;
}
if (unit >= 201 && unit <= 400) {
    remaining = unit - 200;
    totalPrice = totalPrice + remaining * 8;
    unit = unit - remaining;
}
if (unit >= 101 && unit <= 200) {
    remaining = unit - 100;
    totalPrice = totalPrice + remaining * 6;
    unit = unit - remaining;
}

if (unit >= 1 && unit <= 100) {
    remaining = unit;
    totalPrice = totalPrice + remaining * 4;
    unit = unit - remaining;
}

console.log(unit);
console.log(totalPrice);
