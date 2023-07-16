function createMenu() {

    const menu = document.createElement("div");
    menu.classList.add("menu-content");

    const menuContent = document.createElement("div");
    menuContent.classList.add("menu");

    const div1 = document.createElement("div");
    div1.classList.add("menu-div");

    const cakeLabel = document.createElement("div");
    cakeLabel.classList.add("menu-label");

    const cakeTitle = document.createElement("div");
    cakeTitle.textContent = "Cakes";

    const cakeImg = document.createElement("img");
    cakeImg.classList.add("menu-img");
    cakeImg.src = "img/cake3.png";

    cakeLabel.appendChild(cakeTitle);

    const cakeMenu = document.createElement("div");
    cakeMenu.classList.add("menu-details");
    const cake1 = document.createElement("p");
    cake1.textContent = "Cheesecake..................................................$3";
    const cake2 = document.createElement("p");
    cake2.textContent = "Chocolate cake...........................................$4";
    const cake3 = document.createElement("p");
    cake3.textContent = "Swiss Roll......................................................$2";
    const cake4 = document.createElement("p");
    cake4.textContent = "Fruit cake......................................................$3";
    const cake5 = document.createElement("p");
    cake5.textContent = "Cupcake.........................................................$1";

    cakeMenu.appendChild(cake1);
    cakeMenu.appendChild(cake2);
    cakeMenu.appendChild(cake3);
    cakeMenu.appendChild(cake4);
    cakeMenu.appendChild(cake5);
    cakeMenu.appendChild(cakeImg);

    div1.appendChild(cakeLabel);
    div1.appendChild(cakeMenu);


    const div2 = document.createElement("div");
    div2.classList.add("menu-div");

    const coffeeLabel = document.createElement("div");
    coffeeLabel.classList.add("menu-label");
    coffeeLabel.textContent = "Coffee";

    const coffeeMenu = document.createElement("div");
    coffeeMenu.classList.add("menu-details");
    const coffee1 = document.createElement("p");
    coffee1.textContent = "Expresso........................................................$3";
    const coffee2 = document.createElement("p");
    coffee2.textContent = "Americano....................................................$4";
    const coffee3 = document.createElement("p");
    coffee3.textContent = "Cappucino....................................................$2";
    const coffee4 = document.createElement("p");
    coffee4.textContent = "Latte...............................................................$3";
    const coffee5 = document.createElement("p");
    coffee5.textContent = "Mocha............................................................$1";

    const coffeeImg = document.createElement("img");
    coffeeImg.classList.add("menu-img");
    coffeeImg.src = "img/coffee.png";

    coffeeMenu.appendChild(coffee1);
    coffeeMenu.appendChild(coffee2);
    coffeeMenu.appendChild(coffee3);
    coffeeMenu.appendChild(coffee4);
    coffeeMenu.appendChild(coffee5);
    coffeeMenu.appendChild(coffeeImg);

    div2.appendChild(coffeeLabel);
    div2.appendChild(coffeeMenu);

    const aref = document.createElement("a");
    const linktext = document.createTextNode("Image by macrovector on Freepik");
    aref.appendChild(linktext);
    aref.href = "https://www.freepik.com/free-vector/cakes-sweets-set_3797315.htm#page=2&query=desserts&position=26&from_view=search&track=sph";

    const aref2 = document.createElement("a");
    const linktext2 = document.createTextNode("Cute Pattern Background Vectors by Vecteezy");
    aref2.appendChild(linktext2);
    aref2.href = "https://www.vecteezy.com/vector-art/25617370-cute-cake-and-bakery-sweet-food-cartoon-perfect-seamless-pattern-background-for-wrapping-paper-graphic-print-fabric-textile-or-apparel";

    const refdiv = document.createElement("div");
    refdiv.classList.add("menu-ref");
    refdiv.appendChild(aref);
    refdiv.appendChild(aref2);

    menuContent.appendChild(div1);
    menuContent.appendChild(div2);

    menu.appendChild(menuContent);
    menu.appendChild(refdiv);

    return menu;

}

function displayMenu() {

    console.log("Menu page");
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default displayMenu;