let arr = [-3, 5, -2, 0, 1, -6, 8, -4, 2, -1];
let i = 0, j = 0;
while (i < arr.length) {
    if (arr[i] < 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}
console.log(arr);