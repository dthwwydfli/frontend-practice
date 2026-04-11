//You have an array of product objects. Use map to return a new array of objects containing only the name and a discounted price (20% off).

const products = [{name:"shirt",price:40},{name:"shoes",price:80},{name:"hat",price:25}];

const discount = products.map((d)=> ({name:d.name, discountedPrice: d.price *0.8}));
console.log(discount);