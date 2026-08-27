// MOBILE MENU

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}


// CLOSE MENU AFTER CLICKING A NAVIGATION LINK

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// FASHION CARD INFORMATION

const fashionCards = document.querySelectorAll(".fashion-card");
const message = document.getElementById("message");

fashionCards.forEach(function (card) {

    card.addEventListener("click", function (event) {

        if (event.target.closest(".order-button")) {
            return;
        }

        if (card.id === "custom") {
            message.textContent =
                "Custom Outfits: Beautiful outfits made according to your personal style.";
        }

        else if (card.id === "traditional") {
            message.textContent =
                "Traditional Wear: Elegant traditional designs for your special occasions.";
        }

        else if (card.id === "event") {
            message.textContent =
                "Event Fashion: Stylish outfits for weddings, parties and special events.";
        }

    });

});


// IMAGE VIEWER

const galleryImages = document.querySelectorAll(".gallery-item img");
const imageViewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        viewerImage.src = image.src;
        viewerImage.alt = image.alt;

        imageViewer.style.display = "flex";

    });

});


// CLOSE IMAGE VIEWER

if (closeViewer) {
    closeViewer.addEventListener("click", function () {
        imageViewer.style.display = "none";
    });
}


// CLOSE IMAGE VIEWER BY CLICKING OUTSIDE

if (imageViewer) {
    imageViewer.addEventListener("click", function (event) {

        if (event.target === imageViewer) {
            imageViewer.style.display = "none";
        }

    });
}