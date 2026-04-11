//Write a function summarise(people) that takes an array of person objects (name, age, city) and returns a single object with: total count, average age, and an array of unique cities.

const people =[{name:"Ali", age:25, city:"London"},
        {name:"Sara", age:30, city:"Manchester"},
        {name:"Tom", age:25, city:"London"}
    ];

function summarise(people) {
    const cities = people.map((p) => p.city);
    return {
        total: people.length,
        averageAge: people.reduce((acc, curr)=>acc+curr.age,0)/people.length,
        uniqueCities: cities.filter((c, index) => cities.indexOf(c) === index)
    };       
}

console.log(summarise(people));