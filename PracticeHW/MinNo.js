let arr = [4, 5, 2, 9, 6, 5, 1];
let min = arr[0];
for (let index = 1; index < arr.length; index++) {
    if (arr[index] < min) {
        min = arr[index];
    }
}
console.log(min);