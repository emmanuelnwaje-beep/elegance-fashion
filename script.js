document.addEventListener("DOMContentLoaded", function () {


    /* ===== FASHION CARDS ===== */

    const custom =
        document.getElementById("custom");

    const traditional =
        document.getElementById("traditional");

    const event =
        document.getElementById("event");

    const message =
        document.getElementById("message");


    custom.onclick = function () {

        custom.classList.add("selected");

        traditional.classList.remove("selected");

        event.classList.remove("selected");

        message.innerHTML =
            "Beautiful custom outfits made just for your style. ✨👗";

    };


    traditional.onclick = function () {

        custom.classList.remove("selected");

        traditional.classList.add("selected");

        event.classList.remove("selected");

        message.innerHTML =
            "Elegant traditional designs for your special moments. 🧵✨";

    };


    event.onclick = function () {

        custom.classList.remove("selected");

        traditional.classList.remove("selected");

        event.classList.add("selected");

        message.innerHTML =
            "Stand out and look amazing at every special event. ✨👗";

    };


    /* ===== MOBILE MENU ===== */

    const menuButton =
        document.getElementById("menuButton");

    const navLinks =
        document.getElementById("navLinks");


    menuButton.onclick = function () {

        navLinks.classList.toggle("show");


        if (navLinks.classList.contains("show")) {

            menuButton.innerHTML = "✕";

        } else {

            menuButton.innerHTML = "☰";

        }

    };


    /* ===== NAVIGATION LINKS ===== */

    const links =
        document.querySelectorAll(".nav-links a");


    links.forEach(function (link) {

        link.onclick = function () {


            links.forEach(function (item) {

                item.classList.remove("active");

            });


            link.classList.add("active");


            navLinks.classList.remove("show");

            menuButton.innerHTML = "☰";

        };

    });


    /* ===== GALLERY IMAGE VIEWER ===== */

    const galleryImages =
        document.querySelectorAll(".gallery-item img");


    const imageViewer =
        document.getElementById("imageViewer");


    const viewerImage =
        document.getElementById("viewerImage");


    const closeViewer =
        document.getElementById("closeViewer");


    galleryImages.forEach(function (image) {

        image.onclick = function () {

            imageViewer.style.display = "flex";

            viewerImage.src = image.src;

            viewerImage.alt = image.alt;

            document.body.style.overflow = "hidden";

        };

    });


    /* ===== CLOSE IMAGE VIEWER ===== */

    closeViewer.onclick = function () {

        imageViewer.style.display = "none";

        document.body.style.overflow = "";

    };


    imageViewer.onclick = function (event) {

        if (event.target === imageViewer) {

            imageViewer.style.display = "none";

            document.body.style.overflow = "";

        }

    };


    /* ===== ESCAPE KEY ===== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            imageViewer.style.display = "none";

            document.body.style.overflow = "";

        }

    });


});