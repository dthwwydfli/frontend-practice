//Fetch all posts from https://jsonplaceholder.typicode.com/posts and log the total number of posts and the title of the first one.

async function getPosts(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        console.log("Total posts: ", data.length);
        console.log("Title of first post: ", data[0].title);
    } catch(error){
        console.log("Error: ", error.message);
    }
};

getPosts();