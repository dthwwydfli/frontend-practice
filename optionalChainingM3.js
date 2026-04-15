//Write a function getUserCity(user) that safely returns the user's city using optional chaining and defaults to "No city provided" if missing. Test with both users.

function getUserCity(user) {
    return user.address?.city??"No city provided";
}

const user1 = {name:"Istiaq",address:{city:"London"}};
const user2 = {name:"Sara"};

console.log(getUserCity(user1));
console.log(getUserCity(user2));