//Write a function safeDivide(a, b) that returns the result of a/b, but if b is 0 or not a number, return "invalid input".
function safeDivide(a, b){
    if (b===0 || isNaN(b)){
        return "invalid input";
    } 
    return a/b;
    
}

console.log(safeDivide(10,2));
console.log(safeDivide(10,0));
console.log(safeDivide(10,"x"));