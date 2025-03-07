
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
    // project.style.height = calc(project.getBoundingClientRect().height + description.getBoundingClientRect().height)
    project.classList.remove("open")
  } else {
    btn.innerHTML = "Hide Description"
    description.classList.add("show")
    // project.style.height = project.getBoundingClientRect().height
    project.classList.add("open")
  }
}

// FORM

const form = document.getElementById("contactForm")

const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const message = document.getElementById("message")

const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const messageError = document.getElementById("messageError")

form.addEventListener('submit', (e) =>{
  nameError.style.display = "none"
  emailError.style.display = "none"
  messageError.style.display = "none"
  
  if (nameInput.value.trim() === ""){
    nameError.style.display = "block"
    e.preventDefault()
  }

  if (emailInput.value.trim() === '') {
    emailError.style.display = "block"
    e.preventDefault();
  } else if (!validateEmail(emailInput.value)) {
    emailError.style.display = "block"
    e.preventDefault();
  }
  
  if (message.value.trim() === ""){
    messageError.style.display = "block"
    e.preventDefault
  }
})

function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(String(email));
}
