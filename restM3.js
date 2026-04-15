//Write a sum function using rest that accepts any number of arguments and returns their total. Test with 2, 4, and 6 numbers.

function sum (...nums){
    return nums.reduce((acc,n)=>acc+n,0);
}

console.log(sum(1, 2));           
console.log(sum(1, 2, 3, 4));     
console.log(sum(1, 2, 3, 4, 5, 6)); 