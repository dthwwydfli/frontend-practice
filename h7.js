//Build a makeCounter(start, step) closure. It returns a function — each call increments by step and logs the current count. Default step to 1 if not provided.
function makeCounter (start, step=1){
    let count = start;
    return function (){
        count += step;
        console.log(count);
    }
}

const counter = makeCounter(0);
counter();
counter();
counter();

const counterBy5 = makeCounter(0, 5);
counterBy5();
counterBy5();