document.getElementById("no-data").addEventListener(("click"), (event) => say_sorry_not_ready(event));

function say_sorry_not_ready(event) {
    event.preventDefault();
    alert("Sorry, this application has not yet been deployed. Please check again in June!")
}