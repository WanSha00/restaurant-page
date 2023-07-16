function createContact() {

    const contact = document.createElement("div");
    contact.classList.add("contact");

    const div1 = document.createElement("div");
    div1.classList.add("contact-left");

    const div2 = document.createElement("div");
    div2.classList.add("contact-right");

    const contactTitle = document.createElement("p");
    contactTitle.classList.add("contact-title");
    contactTitle.textContent = "VISIT US!";

    const div3 = document.createElement("div");
    div3.classList.add("contact-details");
    const phoneLabel = document.createElement("p");
    phoneLabel.classList.add("contact-label");
    phoneLabel.textContent = "Phone Number";
    const phoneDetail = document.createElement("p")
    phoneDetail.textContent = "012 3456789";

    div3.appendChild(phoneLabel);
    div3.appendChild(phoneDetail);

    const div4 = document.createElement("div");
    div4.classList.add("contact-details");
    const emailLabel = document.createElement("p");
    emailLabel.classList.add("contact-label");
    emailLabel.textContent = "Email";
    const emailDetail = document.createElement("p");
    emailDetail.textContent = "swiits@abc.com";

    div4.appendChild(emailLabel);
    div4.appendChild(emailDetail);

    const div5 = document.createElement("div");
    div5.classList.add("contact-details");
    const addressLabel = document.createElement("p");
    addressLabel.classList.add("contact-label");
    addressLabel.textContent = "Address";
    const addressDetail = document.createElement("p");
    addressDetail.textContent = "123 ABC St. City, EA345";

    div5.appendChild(addressLabel);
    div5.appendChild(addressDetail);

    div2.appendChild(contactTitle);
    div2.appendChild(div3);
    div2.appendChild(div4);
    div2.appendChild(div5);

    const aref = document.createElement("a");
    aref.href = "https://www.freepik.com/free-vector/sweets-desserts-icons-spring-colors-cream-bakery-cakes-pastries-vector-illustration_11059455.htm#page=16&query=dessert&position=47&from_view=author";
    aref.appendChild(div1);


    contact.appendChild(aref);
    contact.appendChild(div2);

    return contact;

}

function displayContact() {

    console.log("Contact page");
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default displayContact;