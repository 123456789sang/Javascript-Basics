// Qsl. Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me'
// let btn = document.createElement('button');
// let h1 = document.createElement('h1');
// btn.innerContent = 'Click me';
// h1.innerText = 'I am good';

function maxSubstringsToRemove(n, substrings, mainString) {
    let maxCount = 0;

    function removeSubstrings(currentString, count) {
        let removed = false;
        
        for (let sub of substrings) {
            let index = currentString.indexOf(sub);
            if (index !== -1) {
                removed = true;
                let newString = currentString.slice(0, index) + currentString.slice(index + sub.length);
                removeSubstrings(newString, count + 1);
            }
        }

        if (!removed) {
            maxCount = Math.max(maxCount, count);
        }
    }

    removeSubstrings(mainString, 0);
    return maxCount;
}

// Example 1
let n1 = 6;
let substrings1 = ["hd", "el", "llo", "wor", "ell", "lds"];
let mainString1 = "helloworlds";
console.log(maxSubstringsToRemove(n1, substrings1, mainString1)); // Output: 4

// Example 2
let n2 = 7;
let substrings2 = ["ggc", "rm", "oo", "le", "glh", "oog", "ec"];
let mainString2 = "googlechrome";
console.log(maxSubstringsToRemove(n2, substrings2, mainString2)); // Output: 3
