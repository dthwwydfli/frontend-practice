//Use optional chaining with ?? to safely get each user's city, defaulting to "Unknown" if missing.

const user = [{name:"Ali",address:{city:"London"}},{name:"Sara"},{name:"Tom",address:{city:"Bristol"}}];

const result = user.map((u)=>u.address?.city??"unknown");
console.log(result);