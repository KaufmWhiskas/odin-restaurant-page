export default function loadAbout(){
    let contentContainer = document.getElementById("content");

    let aboutContainer = document.createElement("div");
    aboutContainer.classList.add("square-about")

    let about = document.createElement("h2");
    about.textContent = "About";

    let aboutText = document.createElement("p");
    aboutText.textContent = "Our head chef Alfonso Porto, decided his life goal was opening a mid italian restaurant with overpriced items, he lives each day happy, knowing he achived it."

    let contact = document.createElement("h4");
    contact.textContent = "Contact Info:"

    let contactInfo = document.createElement("p");
    contactInfo.textContent = "Go fuck yourself IRS"
    contactInfo.classList.add("aMessage")

    aboutContainer.appendChild(about)
    aboutContainer.appendChild(aboutText)
    aboutContainer.appendChild(contact)
    aboutContainer.appendChild(contactInfo)

    contentContainer.appendChild(aboutContainer)
}