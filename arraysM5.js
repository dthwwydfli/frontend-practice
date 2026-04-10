//You have an array of products. Find the first one that costs less than £10 and log its name.

const products = [{name:"pen", price:3},{name:"book", price:12},{name:"ruler", price:7}];

const product = products.find((p)=> p.price<10);
console.log(product);