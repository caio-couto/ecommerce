class Slider 
{
  constructor(slider)
  {
    this.slider = slider;
    this.sliderWrapper = slider.querySelector(".slider__wrapper");
    this.sliderCards = slider.querySelector(".slider__cards");
    this.sliderCard = slider.querySelectorAll(".slider__card");
    this.sliderPreview = slider.querySelectorAll(".slider__preview");
    this.currentSlide = 0; 
    this.currentPreview = 0;
  }
  
  init()
  {
    this.addThumbnailListener();
    this.addButtonListener();
  }
  translateSlide({position})
  {
    this.sliderCards.style.transform = `translateX(-${position}px)`;
  }
  getCenterPosition({index})
  {
    const card = this.sliderCard[index];
    const cardWidth = card.clientWidth;
    const position = index * cardWidth;
    return position
  }
  setVisibleSlide({index})
  {
    const position = this.getCenterPosition({index: index});
    this.focusThumbnail({index: index});
    this.currentSlide = index;
    this.translateSlide({position: position});
  }
  nextSlide()
  {
    this.setVisibleSlide({index: this.currentSlide + 1});
  }
  prevSlide()
  {
    this.setVisibleSlide({index: this.currentSlide - 1});
  }
  onThumbnailClick({index})
  {
    this.setVisibleSlide({index: index});
    this.focusThumbnail({index: index});
  }
  focusThumbnail({index})
  {
    const preview = this.sliderPreview[index];
    this.sliderPreview.forEach(element => element.classList.remove("slider__preview--focus"));
    preview.classList.add("slider__preview--focus");
  }
  addThumbnailListener()
  {
    this.sliderPreview.forEach((element, index) =>
    {
      element.addEventListener("click", () =>
      {
        this.onThumbnailClick({index: index});
      });
    });
  }
  addButtonListener()
  {
    const buttons = this.sliderWrapper.querySelectorAll("slider__buttons");
    const prevButton = buttons[0];
    const nextButton = buttons[1];
    prevButton.addEventListener("click", () =>
    {
      this.prevSlide();
    });
    nextButton.addEventListener("click", () =>
    {
      this.nextSlide();
    });
  }
};
