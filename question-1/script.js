"use strict";

class Slider {
  constructor(selector) {
    this.slider = document.querySelector(selector);
    this.slides = this.slider.querySelectorAll(".slide");
    this.prevButton = this.slider.querySelector(".btn-prev");
    this.nextButton = this.slider.querySelector(".btn-next");
    this.curSlide = 0;
    this.maxSlide = this.slides.length - 1;

    this.init();
  }

  init() {
    this.slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${index * 100}%)`;
    });

    this.nextButton.addEventListener("click", () => {
      this.next();
    });

    this.prevButton.addEventListener("click", () => {
      this.prev();
    });
  }

  next() {
    if (this.curSlide === this.maxSlide) {
      this.curSlide = 0;
    } else {
      this.curSlide++;
    }

    this.slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - this.curSlide)}%)`;
    });
  }

  prev() {
    if (this.curSlide === 0) {
      this.curSlide = this.maxSlide;
    } else {
      this.curSlide--;
    }

    this.slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - this.curSlide)}%)`;
    });
  }
}

new Slider("#my-carausel");
