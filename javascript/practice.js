let heading = document.getElementById("heading");
let message = document.getElementById("message");
let button = document.getElementById("myButton");

heading.textContent = "Javascript changed this!";

button.addEventListener("click!", function() {
    message.textContent = "You clicked the button!";
});