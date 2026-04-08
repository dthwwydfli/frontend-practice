// declaration
function greet(name){
    return "Hello, " + name;
}

// arrow function
const double = (n) => n*2;

const obj = {
    vali: 10, // number
    regular: function(){
        return this.val; //this = obj, so this.val =10
    }, //function
    arrow: ()=> "no 'this' here: " +typeof this //function
}

console.log(greet("World"));
console.log(double(5));
console.log(obj.regular());
console.log(obj.arrow());