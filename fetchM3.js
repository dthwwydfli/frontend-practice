//Fetch users from https://jsonplaceholder.typicode.com/users and log a formatted string for each: "1. Leanne Graham — Sincere@april.biz" using their id, name and email.

async function getUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        data.forEach((u)=>{console.log(`${u.id}. ${u.name} - ${u.email}`);
    });

    } catch(error){
        console.log("Error: ", error.message);
    }
};

getUsers();