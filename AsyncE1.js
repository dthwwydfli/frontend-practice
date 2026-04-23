//Write an async function that simulates fetching a user. Use a 1 second delay then return and log {name:"Istiaq", role:"admin"}.

function wait (ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

const user = {name:"Istiaq", role:"admin"};

async function getUser(user){
    console.log(user);
    await wait(1000);
    console.log(" after 1 sec");
};

getUser(user);