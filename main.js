let header = document.querySelector(".header-sticky");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 60) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


const menu = document.querySelector(".menu");
nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    nav.classList.toggle("menu-open");

})