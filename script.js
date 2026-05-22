// navtoggle

const navToggle = document.querySelector(".nav-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

navToggle.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

    navToggle.classList.toggle("active");

});