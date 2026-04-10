//You have ["cat", "dog", "bird", "fish"]. Add "hamster" to the end, remove the first item using shift, then log the final array and its length.

const animals = ["cat", "dog", "bird", "fish"];

animals.shift();
console.log(animals);

animals.push("hamster");
console.log(animals);
console.log(animals.length);
