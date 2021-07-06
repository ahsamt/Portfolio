let aboutLink = document.querySelector("#about_button");
let projectsLink = document.querySelector("#projects_button");
let contactLink = document.querySelector("#contact_button");

function switchClasses(event) {
  let element = event.currentTarget;

  aboutLink.classList.remove("nav-link active").classList.add("nav-link");
  projectsLink.classList.remove("nav-link active").classList.add("nav-link");
  contactLink.classList.remove("nav-link active").classList.add("nav-link");
  element.classList.add("nav-link active");
}
aboutLink.addEventListener("click", switchClasses);
projectsLink.addEventListener("click", switchClasses);
contactLink.addEventListener("click", switchClasses);
