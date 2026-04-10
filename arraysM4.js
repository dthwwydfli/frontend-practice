//Filter [3, 7, 1, 9, 2, 8, 4, 6] to only keep numbers greater than 5. Then use map on the result to square each one.

const numbers = [3, 7, 1, 9, 2, 8, 4, 6];

const greaterNum = numbers.filter((num)=> num>5);
console.log(greaterNum);

const squareNum = greaterNum.map((num)=>num**2);
console.log(squareNum);

// can also write likes this(chaining): const result = numbers.filter((num) => num > 5).map((num) => num ** 2);