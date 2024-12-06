// Qs4. Write a JavaScript function to count the number of vowels in a String
// argument.
let str="apnacollege";

let count =0;
//defining vowels 
const vowels= ["a", "b", "c", "d", "e"];
function countVowel(str){
   for(let char of str.toLowerCase()){
      if (vowels.includes(char)) {
         count++;
      }
   }
   return count;
}


//input
//const prompt = require('prompt-sync')();
//const result = prompt('Enter a string: ');
console.log(countVowel(str));      