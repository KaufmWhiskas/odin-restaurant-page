import "./template.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const content = document.getElementById("content")

function clearPage(){
    content.innerHTML = "";
}

const homeButton = document.querySelector(".homeButton");
homeButton.addEventListener("click", () => {
    clearPage();
    loadHome();
})

const menuButton = document.querySelector(".menuButton");
menuButton.addEventListener("click", () => {
    clearPage();
    loadMenu();
})

const aboutButton = document.querySelector(".aboutButton");
aboutButton.addEventListener("click", () => {
    clearPage();
    loadAbout();
})

loadHome();