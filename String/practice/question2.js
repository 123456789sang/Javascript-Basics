// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [9, 0, -2]

let arr=[7,9,0,-2];
let n=3;
arr=arr.slice(1);
console.log(arr);