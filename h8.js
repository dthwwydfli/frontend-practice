//Write a function describeType(val) that returns a detailed string: the typeof, whether it's truthy/falsy, and if it's a number — whether it's NaN, positive, or negative.
function describeType(val) {
    const type = typeof val;
    const truthy = Boolean(val);
    let result = "Type: " + type + ", " + (truthy ? "truthy" : "falsy");
    if (type === "number") {
        result += ", ";
        if (isNaN(val)) {
            result += "NaN";
        } else if (val > 0) {
            result += "positive";
        } else {
            result += "negative";
        }

    }
    return result;

}

console.log(describeType(42));
console.log(describeType(-5));
console.log(describeType(NaN));
console.log(describeType("hello"));
console.log(describeType(0));