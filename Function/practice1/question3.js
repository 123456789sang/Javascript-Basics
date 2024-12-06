// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"
const country= ["Australia","Germany","United State of America"];
//country.sort();
//console.log(country);
let large=0;
function longestCountry(list){
    for (let i = 0; i < list.length; i++) {
        if (list[i]>list[i+1]) {
            large =list[i];
        }
        
    }
    return large;
}
console.log(longestCountry(country));
