//You have an array of user objects. Use map and destructuring in the callback to return a formatted string for each user: "Istiaq (London) — admin". Default role to "user" if missing.

const users = [{name:"Istiaq",city:"London",role:"admin"},
    {name:"Sara",city:"Manchester"},
    {name:"Tom",city:"Bristol",role:"mod"}];

const mod = users.map(({ name, city, role = "user" }) => name + " (" + city + ") — " + role)
console.log(mod);
