// let n = 10;
// let sum= 0;
// for (let index = 1; index <= n; index++) {
//     sum += index;
// }
// console.log(sum);

let n = 5;
if (isNaN(n)) {
    console.log("Invalid input");
} else {
    if (n < 0) {
        console.log("should be +ve number and canot be 0");
    } else {
        let sum = 0;
        for (let index = 1; index <= n; index++) {
            sum += index;
        }
        console.log(sum);
    } 
}