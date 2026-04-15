const name = "Istiaq";
const age = 20;

// old way — messy with +
console.log("Hello, my name is " + name + " and I am " + age + " years old.");

// template literal — clean
console.log(`Hello, my name is ${name} and I am ${age} years old.`);


const price = 40;
console.log(`Total: £${price * 1.2}`); // expressions work
console.log(`Is adult: ${age >= 18}`); // booleans work
console.log(`${name.toUpperCase()}`);  // function calls work


// old way — ugly
const old = "Line one\n" + "Line two\n" + "Line three";

// template literal — just press enter
const clean = `Line one
Line two
Line three`;