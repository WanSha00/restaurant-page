function createHome() {

    const home = document.createElement("div");
    home.classList.add("home");

    const div1 = document.createElement("div");
    div1.classList.add("home-left");

    const p1 = document.createElement("p");
    p1.textContent = "Hello!";

    const brandDiv = document.createElement("div");
    brandDiv.classList.add("brand-div");

    const p2 = document.createElement("div");
    p2.textContent = "We are ";

    const brand = document.createElement("div");
    brand.classList.add("brand-name");
    brand.textContent = "Swiits.";

    brandDiv.appendChild(p2);
    brandDiv.appendChild(brand);

    const p3 = document.createElement("p");
    p3.classList.add("home-p");
    p3.textContent = "Sed id molestie est. Curabitur aliquam ante dui, eget fermentum nisi pretium at. Quisque sit amet nisi ut odio vestibulum sagittis ut a purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." +
        "Mauris eu urna accumsan sem viverra semper quis vel dui. Nunc vitae tortor nibh. Nam sit amet posuere magna.";

    const div2 = document.createElement("div");
    div2.classList.add("home-right");

    const homeImage = document.createElement("img");
    homeImage.classList.add("home-img");
    homeImage.src = "img/home.jpg";

    const aref = document.createElement("a");
    const linktext = document.createTextNode("Image by mamewmy on Freepik");
    aref.appendChild(linktext);
    aref.href = "https://www.freepik.com/free-vector/hand-drawn-coffee-cake-cartoon-art-illustration_14092875.htm#page=3&query=dessert&position=44&from_view=search&track=sph";


    div1.appendChild(p1);
    div1.appendChild(brandDiv);
    div1.appendChild(p3);

    div2.appendChild(homeImage);
    div2.appendChild(aref);

    home.appendChild(div1);
    home.appendChild(div2);


    return home;
}
function displayHome() {

    console.log("Home page");
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default displayHome;