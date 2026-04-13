//Merge these two arrays into one without modifying the originals. Then add "grape" at the start and "mango" at the end.

const f1 = ["apple","banana"];
const f2 = ["cherry","kiwi"];

const fruits = ["grape", ...f1, ...f2, "mango"];

console.log(fruits);