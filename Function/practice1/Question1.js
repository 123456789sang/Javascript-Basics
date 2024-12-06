// Qs1. Write a JavaScript function that returns array elements larger than a number
let arr = [1,2,4,6,8,12,34,35];
let number=10;
function largeNumber(num){
    for (let i = 0; i< num.length; i++) {
       if (num[i]>number) {
          return num[i];
       }
        
    }
}
console.log(largeNumber(arr));