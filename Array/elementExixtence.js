//Qs6. Write a JavaScript program to check if an element exists in an array or not.
let arr = [1, 2, 3, 4, 5];
let element = 3;

if (arr.includes(element)) { //if(arr.indexOf(element) ! -1) also works
    console.log(`${element} exists in the array.`);
} else {
    console.log(`${element} does not exist in the array.`);

}