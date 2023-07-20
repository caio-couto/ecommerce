const dataBase = new DataBase();


const modal = new Modal(document.getElementById("modal"));
modal.init();

const mainSlider = new Slider(document.getElementById("slider"), modal);
mainSlider.init();

const modalSlider = new Slider(document.getElementById("modal-slider"));
modalSlider.init();

const purchase = new Purchase(document.querySelector(".info"));
purchase.init();

const cart = new Cart(document.querySelector(".user"), dataBase);
cart.init();
