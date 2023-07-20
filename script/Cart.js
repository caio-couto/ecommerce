class Cart
{
  constructor(user, dataBase)
  {
    this.user = user;
    this.dataBase = dataBase;
    this.references = [];
  }

  init()
  {
    this.addListeners();
    this.references = this.getLocalReferences();
    this.updateCounter();
  }

  addListeners()
  {
    const cartButton = this.user.querySelector(".user__cart");
    cartButton.addEventListener("click", () => 
    {
      this.cartListener();
    });
  }

  deleteListener()
  {
    const deleteButton = this.user.querySelectorAll(".user__delete");
    deleteButton.forEach((button) =>
    button.addEventListener("click", (event) =>
    {
      this.deleteItem(button);
    }));
  }

  cartListener()
  {
    this.user.querySelector(".user__panel").classList.toggle("user__panel--active");
    this.populatePanel()
    purchase.disableButtons();
  }
  
  updateCounter()
  {
    const counter = this.user.querySelector(".user__counter");
    this.references = this.getLocalReferences();   

    if (this.references.length > 0)
    {
      const acc = this.references.reduce((acc, item) => acc + item.amount, 0);
      counter.innerHTML = acc;
      counter.classList.remove("user__counter--empty");
    }
    else
    {
      counter.classList.add("user__counter--empty");
    }
  }

  deleteItem(button)
  {
    const id = button.dataset.id; 
    const removedProduct = this.references.filter((product) => product._id != id);
    this.setLocalReferences(removedProduct);
    this.populatePanel();
  }

  populatePanel()
  {
    this.references = this.getLocalReferences();
    const products = [];
    const userContent = this.user.querySelector(".user__content");
    let textHtml = "";

    if (this.references == null || this.references.length == 0)
    {
      userContent.classList.add("user__content--empty");
      userContent.innerHTML = "<p>You cart is empty</p>";
      return;
    }

    userContent.classList.remove("user__content--empty");

    this.references.forEach((product) =>
    {
      const item = this.dataBase.findById(product._id)
      item.amount = product.amount;
      products.push(item)
    });

    products.forEach((product) =>
    {
      textHtml +=
      `<div class="user__item">
        <img src="${product.image}" alt="product-image">
        <div class="user__info">
          <h3>${product.productName}</h3>
          <span>$${product.price} x ${product.amount}</span> <span>$${(product.price * Number(product.amount)).toFixed(2)}</span>
        </div>
        <button class="user__delete" type="button" data-id="${product._id}">
          <img src="./images/icon-delete.svg" alt="delete-icon">
        </button>
      </div>`
    });

    textHtml += `<button type="submit">Checkout</button>`;
    userContent.innerHTML = textHtml;
    this.deleteListener();
    this.updateCounter();
  }

  getLocalReferences()
  {
    return JSON.parse(localStorage.getItem("products"));
  }
  setLocalReferences(products = [])
  {
    localStorage.setItem("products", JSON.stringify(products));
  }
}
