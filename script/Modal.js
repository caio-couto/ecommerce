class Modal 
{
  constructor(modal)
  {
    this.modal = modal;
    this.ligthbox = modal.querySelector(".modal__ligthbox");
  }

  init()
  {
    this.addListeners();
  }

  addListeners()
  {
    const closeButton = this.modal.querySelector(".modal__close");
    closeButton.addEventListener("click", () => this.close());
  }

  open()
  {
    this.ligthbox.classList.add("modal__ligthbox--active");
    this.modal.classList.add("modal--active");
    const buttons = this.modal.querySelectorAll(".slider__buttons");
    buttons[0].classList.add("slider__buttons--focus");
    buttons[1].classList.add("slider__buttons--focus");
  }

  close()
  {
    this.modal.classList.remove("modal--active");
    this.ligthbox.classList.remove("modal__ligthbox--active");
  }
}
