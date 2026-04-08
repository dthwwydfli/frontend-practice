//closure
function makeMultiplier(factor) {
  return function(number) {
    return number * factor; // 'factor' is remembered
  };
}

const triple = makeMultiplier(3);
const quadruple = makeMultiplier(4);

console.log(triple(5)); 
console.log(quadruple(5));

//each closure has its own scope
console.log(triple(10));