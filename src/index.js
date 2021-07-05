let aboutSection = document.querySelector("#about");
let projectSection = document.querySelector("#projects");
let contactSection = document.querySelector("#contact");

function showProjects(event) {
  event.preventDefault();
  aboutSection.style.display = "none";
  alert("hi");
}

document
  .querySelector("#projects_button")
  .addEventListener("click", showProjects);
