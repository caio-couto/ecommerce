const menuBurgers = document.querySelectorAll(".menu__burger");
const menuList = document.querySelector(".menu__list");
const mainLigthbox = document.querySelector(".main__ligthbox");
const openButton = menuBurgers[0];
const closeButton = menuBurgers[1];

openButton.addEventListener("click", toggleMenuList);
closeButton.addEventListener("click", toggleMenuList);

function toggleMenuList()
{
  mainLigthbox.classList.toggle("main__ligthbox--active");
  menuList.classList.toggle("menu__list--active");
}


