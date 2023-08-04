const menu = document.getElementById("menu");
const showMenu = document.querySelector(".menu-icon");
const hideMenu = document.querySelector(".close-icon");

hideMenu.addEventListener('click', closeMenu);
showMenu.addEventListener('click', openMenu);

function closeMenu() {
    menu.style.top = "-100vh"
}
function openMenu() {
    menu.style.top = "17%"
}