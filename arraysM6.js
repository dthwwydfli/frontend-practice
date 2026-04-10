//Use reduce to calculate the total price of all items in a cart.

const items = [{item:"shoes",price:49},{item:"shirt",price:25},{item:"hat",price:15}];

const totalPrice = items.reduce((total, item)=>total+item.price,0);
console.log(totalPrice);
