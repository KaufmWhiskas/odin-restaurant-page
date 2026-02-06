export default function loadMenu(){
    let contentContainer = document.getElementById("content");

    let menuContainer = document.createElement("div");
    menuContainer.classList.add("square-menu")

    const menuItems = [
        {
            name: "Pizza Margherita",
            description: "The og",
            price: "13,90€"
        },
        {
            name: "Pizza Salame",
            description: "Only the best discounter slices",
            price: "16,90€"
        },
        {
            name: "Pasta Amatriciana",
            description: "A true roman classic",
            price: "14,97€"
        },
        {
            name: "Spaghetti Carbonara",
            description: "With extra cream",
            price: "19,99€"
        },
        {
            name: "Spaghetti Bolognese",
            description: "A true italian classic!",
            price: "69,69€"
        },
        {
            name: "A glass of the Wine of the day",
            description: "Straight from Italy*",
            price: "2,99€"
        },
        {
            name: "Napkins",
            description: "Just like a napkin",
            price: "6,99€"
        }
    ]

    menuItems.forEach(item => {
        let menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        let itemName = document.createElement("h3");
        itemName.classList.add("item-name");
        itemName.textContent = item.name;

        let itemDesc = document.createElement("p");
        itemDesc.textContent = item.description;

        let itemPrice = document.createElement("p");
        itemPrice.textContent = item.price;

        menuItem.appendChild(itemName)
        menuItem.appendChild(itemDesc)
        menuItem.appendChild(itemPrice)

        menuContainer.appendChild(menuItem)
    });
    contentContainer.appendChild(menuContainer)
}