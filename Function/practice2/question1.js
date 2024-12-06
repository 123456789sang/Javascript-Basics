const arr= [12,13,14];
const avg=(arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
    
}
console.log(avg(arr)); // call the function with the arguments array