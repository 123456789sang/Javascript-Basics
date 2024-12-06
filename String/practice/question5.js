// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

function stripSpaces(str) {
    return str.trim();
}

// Test the function

console.log(stripSpaces("  Hello ,World!  ")); // Output: "Hello World!"