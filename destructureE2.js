//Destructure the first, second, and last item from this array. Skip the third item.

const days = ["Monday","Tuesday","Wednesday","Thursday"];

const [first, second,,last] = days;
console.log(first);
console.log(second);
console.log(last);