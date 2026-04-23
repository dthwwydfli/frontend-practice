//Write an async function that intentionally fetches a bad URL. Use try/catch to handle the error gracefully and log "Failed to fetch data" instead of crashing.

async function badFetch() {
  try {
    const response = await fetch("//https:www.yt.com"); 
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Failed to fetch"); 
  }
}

badFetch();