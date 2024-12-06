// Qs4. Write a JavaScript program to test whether the character at the given (character)
// index is lower case.

let str = "Hello World";
let index = 6;

if (str[index] === str[index].toLowerCase()) {
    console.log("Character at index " + index + " is lowercase");
} else {
    console.log("Character at index " + index + " is uppercase");
}