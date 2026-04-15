const user = { name: "Istiaq", address: { city: "London" } };

console.log(user.address?.city);     // "London"
console.log(user.phone?.number);     // undefined
console.log(user.phone?.number ?? "No phone"); // "No phone"

const users = [{ name: "Ali" }, { name: "Sara" }];
console.log(users?.[0]?.name);  // "Ali"
console.log(users?.[5]?.name);  // undefined