const infoButtons = document.querySelectorAll(".info__button");
const infoText = document.querySelector(".info__text");
const minusButton = infoButtons[0];
const plusButton = infoButtons[1];
const submitButton = infoButtons[2];

infoForm.addEventListener("submit", (event) =>
{
  event.preventDefault();
  const amount = Number(event.target.amount.value);
  const _id = event.target._id.value;
  let products = JSON.parse(localStorage.getItem("products"));

  if (amount <= 0)
  {
    return;
  }
  if (products == null)
  {
     localStorage.setItem("products", JSON.stringify([]));
      products = [];
  }

  const productExist = products.map((item) => item._id).indexOf(_id); 

  if (productExist <= -1)
  {
    products.push(
    {
      _id: _id,
      amount: amount
    });
  }
  else
  {
    products[productExist].amount += amount;
  }

  localStorage.setItem("products", JSON.stringify(products));
});

plusButton.addEventListener("click", () => 
{
  const value = Number(infoText.value);
  if (value < 99)
  {
    infoText.value = value + 1;
  }
});


minusButton.addEventListener("click", () => 
{
  const value = Number(infoText.value);
  if (value > 0)
  {
    infoText.value = value - 1;
  }
});
