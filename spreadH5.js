//Write a function updateUser(user, updates) that takes a user object and an updates object, and returns a new object with the updates applied. The original must stay unchanged. Test it by updating age and adding an email.

function updateUser(user, updates) {
    return {...user, ...updates};
}

const user = { name: "Istiaq", age: 20, city: "London" };

console.log(updateUser(user, { age: 21, email: "istiaq@gmail.com" }));
console.log(user);