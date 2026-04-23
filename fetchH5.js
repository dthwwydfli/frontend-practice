//Fetch users from the API. Filter to only users whose email ends in .biz. Return and log a new array with just their name and company name (user.company.name).

async function getBizUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const bizUsers = data.filter((u) => u.email.endsWith(".biz"));
    const result = bizUsers.map((u) => ({ name: u.name, company: u.company.name }));
    console.log(result);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

getBizUsers();