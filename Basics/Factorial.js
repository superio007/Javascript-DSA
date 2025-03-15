// let n = 5;
// let facto= 1;
// for (let index = 1; index <= n; index++) {
//     facto *= index;
// }
// console.log(facto);

let n = 5;
if (isNaN(n)) {
    console.log("Invalid input");
} else {
    if (n < 0) {
        console.log("should be +ve number and canot be 0");
    } else {
        let facto = 1;
        for (let index = 1; index <= n; index++) {
            facto *= index;
        }
        console.log(facto);
    } 
}