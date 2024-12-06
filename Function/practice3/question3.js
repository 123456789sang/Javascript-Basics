// s3. Create a new array whose elements are in uppercase of words present in the
// original array  

const originalArray = ["apple", "banana", "cherry", "date", "elderberry"];

const uppercaseArray = originalArray.map(word => word.toUpperCase());

console.log(uppercaseArray); // Output: ["APPLE", "BANANA", "CHERRY", "DATE", "ELDERBERRY"]