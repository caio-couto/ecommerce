const menuBurgers = document.querySelectorAll(".menu__burger");
const menuList = document.querySelector(".menu__list");
const mainLigthbox = document.querySelector(".main__ligthbox");
const openButton = menuBurgers[0];
const closeButton = menuBurgers[1];
const cartButton = document.querySelector(".user__cart");
const panel = document.querySelector(".user__panel");
const infoForm = document.querySelector(".info__form");

openButton.addEventListener("click", toggleMenuList);
closeButton.addEventListener("click", toggleMenuList);

function toggleMenuList()
{
  mainLigthbox.classList.toggle("main__ligthbox--active");
  menuList.classList.toggle("menu__list--active");
}

cartButton.addEventListener("click", () =>
{
  panel.classList.toggle("user__panel--active");
  infoForm.classList.toggle("info__form--disabled");
  infoForm.querySelectorAll(".info__button").forEach((element) =>
  {
    element.toggleAttribute("disabled");
  })
  infoForm.querySelector("input").toggleAttribute("disabled");
});
