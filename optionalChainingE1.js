//Access city from the nested address safely. Then try to access a phone property that doesn't exist — make sure it doesn't crash.

const user = {name:"Istiaq", address:{city:"London"}};

console.log(user.address?.city);
console.log(user.phone?.number);