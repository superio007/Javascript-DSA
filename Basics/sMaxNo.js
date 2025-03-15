let arr = [4, 5, 2, 9, 6, 5, 1];
let max = arr[0];
let sMax = arr[1];
for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
        sMax = max;
        max = arr[i];
    } else if (arr[i] > sMax && arr[i] != max) {
        sMax = arr[i];
    }
}
console.log(sMax);