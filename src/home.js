export default function loadHome(){
    let contentContainer = document.getElementById("content");

    let bgSquare = document.createElement("div");
    bgSquare.classList.add("square");

    let text0 = document.createElement("p");
    text0.textContent = "Text about a wonderful restaurant.";

    let text1 = document.createElement("p");
    text1.textContent = "Some more descriptive text.";

    let img_chef = document.createElement("div");
    img_chef.classList.add("img_chef");

    let text2 = document.createElement("p");
    text2.textContent = "A call to action!";

    bgSquare.appendChild(text0);
    bgSquare.appendChild(text1);
    bgSquare.appendChild(img_chef);
    bgSquare.appendChild(text2);
    contentContainer.appendChild(bgSquare)
}