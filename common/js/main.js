const sliderSection = document.querySelector(".slider_section");
const sliderContainer = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider__animal-item");
const nextBtn = document.querySelector(".slider_right-btn");
const prevBtn = document.querySelector(".slider_left-btn");
const slideWidth = 360;

let countSlide = 1;
let slideWrapperStep = 1;
let targetSlide = 0;

const data = [
  {
    name: "Jennifer",
    img: "assets/images/pets-jennifer.png",
  },
  {
    name: "Sophia",
    img: "assets/images/pets-sophia.png",
  },
  {
    name: "Woody",
    img: "assets/images/pets-woody.png",
  },
  {
    name: "Scarlett",
    img: "assets/images/pets-scarlet.png",
  },
  {
    name: "Katrine",
    img: "assets/images/pets-katrine.png",
  },
  {
    name: "Timmy",
    img: "assets/images/pets-timmy.png",
  },
  {
    name: "Freddie",
    img: "assets/images/pets-freddie.png",
  },
  {
    name: "Charly",
    img: "assets/images/pets-charly.png",
  },
];

// Slide count
function getCountSlide() {
  if (sliderSection.offsetWidth >= 990) {
    countSlide = 1;
    slideWrapperStep = 3;
  }
  if (sliderSection.offsetWidth < 990) {
    countSlide = 2;
    slideWrapperStep = 2;
  }
  if (sliderSection.offsetWidth <= 420) {
    countSlide = 3;
    slideWrapperStep = 1;
  }
}

function reInitSlides() {
  const randomSlides = [];
  const numberOfSlides = 3 + slideWrapperStep;
  while (randomSlides.length < numberOfSlides) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const slide = data[randomIndex];
    if (!randomSlides.includes(slide)) {
      randomSlides.push(slide);
    }
  }

  for (let i = 0; i < randomSlides.length; i++) {
    slides[i].querySelector("img").src = randomSlides[i].img;
    slides[i].querySelector(".animal-item__name").textContent =
      randomSlides[i].name;
  }
}

function nextSlide() {
  getCountSlide();
  console.log(`${targetSlide} :: ${countSlide} :: ${slideWrapperStep}`);
  if (targetSlide >= countSlide) {
    reInitSlides();
    targetSlide = 0;
    sliderContainer.style.transition = "transform 0.5s ease-in-out";
    sliderContainer.style.transform = `translateX(-${
      slideWidth * targetSlide
    }px)`;
  } else {
    targetSlide += slideWrapperStep;
    sliderContainer.style.transition = "transform 0.5s ease-in-out";
    sliderContainer.style.transform = `translateX(-${
      slideWidth * targetSlide
    }px)`;
  }
}

function prevSlide() {
  getCountSlide();
  console.log(`${targetSlide} :: ${countSlide} :: ${slideWrapperStep}`);
  if (targetSlide <= 0) {
    reInitSlides();
    targetSlide = slideWrapperStep;
    sliderContainer.style.transition = "transform 0.5s ease-in-out";
    sliderContainer.style.transform = `translateX(-${
      slideWidth * slideWrapperStep
    }px)`;
  } else {
    targetSlide -= slideWrapperStep;
    console.log(`new: ${targetSlide} :: ${countSlide} :: ${slideWrapperStep}`);
    sliderContainer.style.transition = "transform 0.5s ease-in-out";
    sliderContainer.style.transform = `translateX(-${
      slideWidth * targetSlide
    }px)`;
  }
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
