// Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.
const person = {
    name: "John Doe",
    age: 30,
    city: "Los Angeles"
};
//console.log(person.city);

person.city = "New York";
person.country = "United States";

console.log(person); // Output: { name: 'John Doe', age: 30, city: 'New York', country: 'United States' }