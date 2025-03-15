let arr = [4, 5, 2, 9, 6, 5, 1];
let min = arr[0];
let sMin = arr[1];
for (let i = 2; i < arr.length; i++) {
    if (arr[i] < min) {
        sMin = min;
        min = arr[i];
    }else if(arr[i]<sMin && arr[i]!=min){
        sMin = arr[i];
    }
}
console.log(sMin);
console.log(min);