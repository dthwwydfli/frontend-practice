//Use map to take ["alice", "bob", "charlie"] and return a new array with every name capitalised using .toUpperCase().

const names = ["alice", "bob", "charlie"];

const upperCase = names.map((name)=>name.toUpperCase());

console.log(names);
console.log(upperCase);