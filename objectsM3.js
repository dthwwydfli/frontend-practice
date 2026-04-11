//Write a function updateField(obj, key, value) that updates any property on an object using bracket notation. Test it by updating name and age on a person object.

const person = {
    name: "Istiaq",
    age: 20
};

function updateField(obj, key, value){
    obj[key] = value; 
}


updateField(person, "name", "Alex");
updateField(person, "age", 20);
console.log(person);
