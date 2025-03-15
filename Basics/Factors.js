let n = 36;
if (isNaN(n)) {
    console.log("Invalid input");
} else {
    if (n < 0) {
        console.log("should be +ve number and canot be 0");
    } else {
        for (let index = 1; index <= Math.floor(n / 2); index++) {
            if(n%index==0){
                console.log(index);
            }
        }
        console.log(n);
    } 
}