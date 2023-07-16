import displayHome from "./home";
import displayMenu from "./menu";
import displayContact from "./contact";

function createHeader() {

    const header = document.createElement("header");
    header.classList.add("header");

    const div1 = document.createElement("div");
    div1.classList.add("header-logo");

    const restaurantName = document.createElement("div");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Swiits";

    const headerImg = document.createElement("img");
    headerImg.classList.add("header-img");
    headerImg.src = "img/heart.jpg";

    const aref = document.createElement("a");
    aref.href = "https://icon-library.com/icon/white-heart-icon-png-26.html";
    aref.appendChild(headerImg);

    div1.appendChild(restaurantName);
    div1.appendChild(aref);

    header.appendChild(div1);
    header.appendChild(createNav());

    return header;
}

function createNav() {

    const nav = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        displayHome();
    });

    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        displayMenu();
    });

    const contactButton = document.createElement("button");
    contactButton.classList.add("button-nav");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        displayContact();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(button) {

    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function createMain() {

    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {

    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} WanSha00`;

    footer.appendChild(copyright);

    return footer;
}

function initializePage() {

    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".button-nav"));
    displayHome();
}

export default initializePage;