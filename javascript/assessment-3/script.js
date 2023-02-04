const body = document.getElementById("body");

// Slider
const slider = document.createElement("div");
slider.setAttribute("class", "slider");
body.appendChild(slider);

let Slide_No = 4;
let dots_No = 3;
let img_Array = [
  {
    src: "https://source.unsplash.com/random?landscape,mountain",
    alt: "image-land",
  },
  {
    src: "https://source.unsplash.com/random?landscape",
    alt: "image-mountain",
  },
  {
    src: "https://source.unsplash.com/random?mountain",
    alt: "image",
  },
  {
    src: "https://source.unsplash.com/random?landscape",
    alt: "image",
  },
];

// slide and image div
for (let i = 0; i < Slide_No; i++) {
  let slides = document.createElement("div");
  slides.setAttribute("class", "slide");

  let element = img_Array[i];

  let image = document.createElement("img");
  Object.keys(element).forEach((key) => image.setAttribute(key, element[key]));

  slides.appendChild(image);
  slider.appendChild(slides);
}

// Button --
// select next slide button
let nextSlide = document.createElement("button");
nextSlide.setAttribute("class", "btn");
nextSlide.setAttribute("id", "btn-next");
let rightArrow = document.createTextNode(">");
nextSlide.appendChild(rightArrow);
slider.appendChild(nextSlide);

// select prev slide button
let prevSlide = document.createElement("button");
prevSlide.setAttribute("class", "btn");
prevSlide.setAttribute("id", "btn-prev");
let leftArrow = document.createTextNode("<");
prevSlide.appendChild(leftArrow);
slider.appendChild(prevSlide);

// dots
let dots = document.createElement("div");
dots.setAttribute("class", "dots");
body.appendChild(dots);

for (let i = 0; i < dots_No; i++) {
  let dot = document.createElement("span");
  dot.setAttribute("class", "dot");
  dots.appendChild(dot);
}

// js
const slides = document.querySelectorAll(".slide");
const dotted = document.querySelectorAll(".dot");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality

nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  // move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

  for (i = 0; i < dotted.length; i++) {
    dotted[i].className = dotted[i].className.replace(" active", "");
  }
  dotted[curSlide - 1].className += " active";
});

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

  for (i = 0; i < dotted.length; i++) {
    dotted[i].className = dotted[i].className.replace(" active", "");
  }
  dotted[curSlide - 1].className += " active";
  // dot.forEach(())
});

setInterval(() => {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

  for (i = 0; i < dotted.length; i++) {
    dotted[i].className = dotted[i].className.replace(" active", "");
  }
  dotted[curSlide - 1].className += " active";
}, 1000);
