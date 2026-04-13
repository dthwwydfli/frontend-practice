// Copy this person object and update the city to "Manchester". Confirm the original still has "London".

const person = {name:"Istiaq", age:20, city:"London"};

const copy = {...person};
console.log(copy);

const city = { ...person, city:"Manchester"};

console.log(city);
console.log(person);
