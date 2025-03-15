// With extra space

// let arr = [4, 5, 2, 9, 6, 5, 1];
// let rev = [];
// let j = 0;
// for (let index = arr.length - 1; index >= 0; index--) {
//     rev[j] = arr[index];
//     j++;
// }
// console.log(rev);

// Without extra space

let arr = [4, 5, 2, 9, 6, 5, 1];
let i = 0;
let j = arr.length - 1;
while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);