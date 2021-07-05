let aboutBlock = document.querySelector("#about_me");
let projectsBlock = document.querySelector("#projects");
let contactBlock = document.querySelector("#contact");

let aboutLink = document.querySelector("#about_button");
let projectsLink = document.querySelector("#projects_button");
let contactLink = document.querySelector("#contact_button");

function displayAbout(event) {
  event.preventDefault();
  aboutBlock.style.display = "block";
  projectsBlock.style.display = "none";
  contactBlock.style.display = "none";
}

function displayProjects(event) {
  event.preventDefault();
  aboutBlock.style.display = "none";
  contactBlock.style.display = "none";
  projectsBlock.style.display = "block";
}

function displayContacts(event) {
  event.preventDefault();
  aboutBlock.style.display = "none";
  projectsBlock.style.display = "none";
  contactBlock.style.display = "block";
}

aboutLink.addEventListener("click", displayAbout);
projectsLink.addEventListener("click", displayProjects);
contactLink.addEventListener("click", displayContacts);
