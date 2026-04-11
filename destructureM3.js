//Destructure name and city from the nested address. Also destructure role with a default of "guest".

const address = {name:"Istiaq",address:{city:"London",postcode:"E1"},role:undefined};

const {name, address:{city, postcode}, role = "guest"} = address;

console.log(name);
console.log(city);
console.log(role);