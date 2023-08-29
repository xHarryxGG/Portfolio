const menu = document.querySelector(".menu-container");
const navReponsive = document.querySelector(".nav-responsive");
let active = false;

menu.addEventListener("click", function() {
  if (navReponsive.style.display === "none" || navReponsive.style.display === "") {
    navReponsive.style.display = "flex";
    navReponsive.classList.remove("reverse");
  } else {
    navReponsive.style.display = "none";
    navReponsive.classList.add("reverse");
  }
});

/*
const menu = document.querySelector(".menu-container");
const nav = document.querySelector(".nav-respondive");

menu.addEventListener("click", function() {
  nav.classList.toggle("mostrar");
});
*/

function efectoHabilidades() {
  var skills = document.querySelector(".skill");
  var distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
  if(distanciaSkills >= 300) {
    let habilidades = document.querySelectorAll(".progress-barra");
    habilidades[0].classList.add("html");
    habilidades[1].classList.add("css");
    habilidades[2].classList.add("javascript");
    habilidades[3].classList.add("sqlite");
    habilidades[4].classList.add("vb");
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("trabajoEquipo");
    habilidades[7].classList.add("creatividad");
    habilidades[8].classList.add("dedicacion");
  } 
}

window.onscroll = function() {
  efectoHabilidades();
}