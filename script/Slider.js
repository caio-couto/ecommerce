class Slider 
{
  constructor(slider, modal)
  {
    this.slider = slider;
    this.modal = modal;
    this.sliderCards = slider.querySelector(".slider__cards");
    this.sliderCard = slider.querySelectorAll(".slider__card");
    this.sliderPreview = slider.querySelectorAll(".slider__preview");
    this.currentSlide = 0; 
    this.currentPreview = 0;
  }
  
  init()
  {
    this.addListeners();
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
    if(this.sliderCard.length > this.currentSlide + 1)
    {
      this.setVisibleSlide({index: this.currentSlide + 1});
    }
    else
    {
      this.currentSlide = 0;
      this.setVisibleSlide({index: this.currentSlide});
    }
  }

  prevSlide()
  {
    if(this.currentSlide - 1 >= 0)
    {
      this.setVisibleSlide({index: this.currentSlide - 1});
    }
    else
    {
      this.currentSlide = this.sliderCard.length - 1;
      this.setVisibleSlide({index: this.currentSlide});
    }
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

  addListeners()
  {
   
    this.sliderPreview.forEach((element, index) => this.thumbnailListener(element, index));
    const buttons = this.slider.querySelectorAll(".slider__buttons");
    buttons[0].addEventListener("click", () => this.buttonsListener({isNext: false}));
    buttons[1].addEventListener("click", () => this.buttonsListener({isNext: true}));
    if (this.modal && !this.isMobile())
    {
      this.sliderCard.forEach((card) => card.addEventListener("click", () => this.modal.open()));
    } 
  }

  thumbnailListener(thumb, index)
  {
    thumb.addEventListener("click", () =>
    {
      this.onThumbnailClick({index: index});
    });
  }

  buttonsListener({isNext})
  {
    if(isNext)
    {
      this.nextSlide();
    }
    else 
    {       
      this.prevSlide();
    }
  }

  isMobile() 
  { 
    return ( window.innerWidth <= 800 ); 
    
  }
};
