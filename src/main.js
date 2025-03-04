
let currentPage = "currentHome"
const homeNav = document.getElementById("currentHome")
const aboutNav = document.getElementById("currentAbout");
const projectsNav = document.getElementById("currentProjects");
const contactNav = document.getElementById("currentContact");

const projectButtons = document.querySelectorAll(".projectBtn")

const navList = [homeNav, aboutNav, projectsNav, contactNav]

document.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      currentPage = "currentHome";
    } else if (window.scrollY >= 620 && window.scrollY <= 1150) {
      currentPage = "currentAbout";
    } else if (window.scrollY >= 1600 && window.scrollY <= 1960) {
      currentPage = "currentProjects";
    } else if (window.scrollY === 2757) {
      currentPage = "currentContact";
    }
    for(const page of navList){
        if (currentPage === page.id){
            page.style.textDecoration = "underline"
        }else {
            page.style.textDecoration = ""
        }
    }
})

projectButtons.forEach((btn) =>{
  btn.addEventListener("click", () => toggleProjectDisplay(btn))
})

function toggleProjectDisplay(btn){
  const project = btn.parentNode
  const description = btn.parentNode.querySelector("p")
  if (description.classList.contains("show")){
    btn.innerHTML = "Show Description"
    description.classList.remove("show")
    project.style.height = calc(project.getBoundingClientRect().height + description.getBoundingClientRect().height)
  } else {
    btn.innerHTML = "Hide Description"
    description.classList.add("show")
    project.style.height = project.getBoundingClientRect().height
  }
}