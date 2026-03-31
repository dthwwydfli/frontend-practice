let heading = document.getElementById("heading");
let message = document.getElementById("message");
let button = document.getElementById("myButton");

heading.textContent = "JavaScript changed this!";

button.addEventListener("click", function() {
    heading.style.color = "red";
});





