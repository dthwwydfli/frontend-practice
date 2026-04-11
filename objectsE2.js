//Use Object.keys() to loop over a person object and log each key in uppercase.

const person = {
    name: "Istiaq",
    age: 20,
    city: "London"
};

Object.keys(person).forEach((key) => console.log(key.toUpperCase()))
