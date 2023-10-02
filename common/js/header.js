const burgerMenu = document.querySelector(".nav-menu");
const menuLink = document.querySelectorAll(".menu_link");

const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", openCloseMenu);
menuLink.forEach( link => {
  link.addEventListener("click", openCloseMenu);
});

function openCloseMenu() {
  menu.classList.toggle("_show");
  burgerMenu.classList.toggle('_active');

  if (menu.classList.contains("_show")) {
    document.body.style.overflow = "hidden";
  }
   else
    document.body.style.overflow = "";
}