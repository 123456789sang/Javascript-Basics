// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.

const arr = [1, 2, 3, 4, 5];

const squareAndSum = arr => arr.map(num => num ** 2).reduce((acc, num) => acc + num, 0);
const average = squareAndSum(arr) / arr.length;
console.log(average);