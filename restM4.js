//Destructure the first two items from this array, collect the rest, then log how many items are in the rest.

const[first,second, ...rest]=[10, 20, 30, 40, 50, 60];
console.log(rest.length);