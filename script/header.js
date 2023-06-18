const menuBurgers = document.querySelectorAll(".menu__burger");
const menuList = document.querySelector(".menu__list");
const mainLigthbox = document.querySelector(".main__ligthbox");
const openButton = menuBurgers[0];
const closeButton = menuBurgers[1];
const cartButton = document.querySelector(".user__cart");
const userPanel = document.querySelector(".user__panel");
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
  userPanel.classList.toggle("user__panel--active");
  populatePanel();
  infoForm.classList.toggle("info__form--disabled");
  infoForm.querySelectorAll(".info__button").forEach((element) =>
  {
    element.toggleAttribute("disabled");
  })
  infoForm.querySelector("input").toggleAttribute("disabled");
});

function populatePanel()
{
  const references = JSON.parse(localStorage.getItem("products"));
  const products = [];
  let text = "";
  
  if (references == null || references.length == 0)
  {
    userPanel.querySelector(".user__content").classList.add("user__content--empty");
    userPanel.querySelector(".user__content").innerHTML = "<p>You cart is empty.</p>";
    return
  }
userPanel.querySelector(".user__content").classList.remove("user__content--empty");

  references.forEach((product) => 
  { 
    const item = dataBase.findById(product._id);
    item.amount = product.amount;
    products.push(item);
  });
  console.log(products)
  products.forEach((product) =>
  {
    text +=
    `<div class="user__item">
        <img src="${product.image}" alt="product-image">
        <div class="user__info">
          <h3>${product.productName}</h3>
          <span>$${product.price} x ${product.amount}</span> <span>$${(product.price * Number(product.amount)).toFixed(2)}</span>
        </div>
        <button type="button">
          <img src="./images/icon-delete.svg" alt="delete-icon">
        </button>
    </div>`
  });
  
  text += `<button type="submit">Checkout</button>`
  userPanel.querySelector(".user__content").innerHTML = text;
}
