class Purchase
{
  constructor(info)
  {
    this.info = info;
    this.products = [];
  }

  init()
  {
    this.addListeners();
  }

  getLocalProducts()
  {
    return JSON.parse(localStorage.getItem("products"));
  }
  setLocalProducts(products = [])
  {
    localStorage.setItem("products", JSON.stringify(products));
  }

  addLocalItem(_id, amount)
  {
    this.products = this.getLocalProducts();
    
    if (amount <= 0)
    {
      return;
    }

    if (this.products == null)
    {
      this.setLocalProducts();
      this.products = [];
    }

    const productsExist = this.products.map((item) => item._id).indexOf(_id);

    if (productsExist <= -1)
    {
      this.products.push({_id: _id, amount: amount});
    }
    else 
    {
      this.products[productsExist].amount += amount;
    }

    this.setLocalProducts(this.products);
  }

  addListeners()
  {
    const infoForm = this.info.querySelector(".info__form");
    infoForm.addEventListener("submit", (event) =>
    {
      event.preventDefault();
      const amount = Number(event.target.amount.value);
      const _id = event.target._id.value;
      this.addLocalItem(_id, amount);
      cart.updateCounter();
    });
    const infoButtons = this.info.querySelectorAll(".info__button");
    infoButtons[0].addEventListener("click", () => this.buttonListener(false));
    infoButtons[1].addEventListener("click", () => this.buttonListener(true));
  }

  disableButtons()
  {
    this.info.querySelector(".info__form").classList.toggle("info__form--disabled");
    this.info.querySelectorAll(".info__button").forEach((button) =>
    {
      button.toggleAttribute("disabled");
    });
    this.info.querySelector("input").toggleAttribute("disabled");
  }

  buttonListener(isPlusButton)
  {
    const infoText = this.info.querySelector(".info__text");
    const value = Number(infoText.value);

    if (isPlusButton && value < 99)
    {
      infoText.value = value + 1;
    }
    else if (!isPlusButton && value > 0)
    {
      infoText.value = value - 1;
    }
  }
}
