// Use reduce to group an array of people by their country into an object.

const people = [{ name: "Ali", country: "UK" }, { name: "Sara", country: "US" }, { name: "Tom", country: "UK" }, { name: "Mia", country: "US" }, { name: "Joe", country: "AU" }];

const grouped = people.reduce((acc, person) => {
    if (acc[person.country]) {
        acc[person.country].push(person);
    } else {
        acc[person.country] = [];
        acc[person.country].push(person);
    }
    return acc;
},
    {});

console.log(grouped);
