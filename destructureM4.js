//Write a function displayProduct({ name, price, currency = "£" }) that logs a formatted string like "shirt: £40". Test it with and without a currency.

function displayProduct({ name, price, currency = "£" }){
    console.log(name+": " +currency+price);
}

displayProduct({name:"shirt", price:40});
displayProduct({name:"shirt", currency:"£", price:40});