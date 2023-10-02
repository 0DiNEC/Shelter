const currentPageBtn = document.querySelector(".navigation_current-page-btn");
const nextPageBtn = document.querySelector(".navigation-btn-arrow_next");
const lastPageBtn = document.querySelector(".navigation-btn-arrow_last-next");
const prevPageBtn = document.querySelector(".navigation-btn-arrow_previous");
const startPageBtn = document.querySelector(".navigation-btn-arrow_previous-start");
const animalCards = document.querySelectorAll(".slider__animal-item");
const sliderSection = document.querySelector('.slider_section');

let targetPage = 1;
let curPage = 0;

const data = [
  {
    name: "Jennifer",
    img: "../../assets/images/pets-jennifer.png",
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets-sophia.png",
  },
  {
    name: "Woody",
    img: "../../assets/images/pets-woody.png",
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets-scarlet.png",
  },
  {
    name: "Katrine",
    img: "../../assets/images/pets-katrine.png",
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets-timmy.png",
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets-freddie.png",
  },
  {
    name: "Charly",
    img: "../../assets/images/pets-charly.png",
  },
];

function getElementsOnPages() {
  const documentWidth = document.documentElement.clientWidth;
  if (documentWidth >= 1255) return 8;
  else if (documentWidth >= 620) return 6;
  else return 3;
}

function getRandomCards(number) {
  let cardSet = [];

  for (let i = 0; i < number; i++) {
    let randomCard = Math.floor(Math.random() * data.length);

    while (cardSet.includes(randomCard)) {
      randomCard = Math.floor(Math.random() * data.length);
    }

    cardSet.push(randomCard);
  }

  return cardSet;
}

const paginationItems = [];
let pageElements = 8;
let pageCount = 6;

function initPagination() {
  pageElements = getElementsOnPages();
  pageCount = 48 / pageElements;

  console.log(pageCount);

  for (let i = 0; i < pageCount; i++) {
    const elements = [];
    const randomElements = getRandomCards(pageElements);
    for (let j = 0; j < pageElements; j++) {
      elements.push(data[randomElements[j]]);
    }
    paginationItems.push(elements);
  }

  console.log("length: " + paginationItems.length);
}

initPagination();

function moveBoxForward() {
  sliderSection.style.animationName = 'moveForward';
  sliderSection.addEventListener('animationend', function() {
    sliderSection.style.animationName = '';
  });
}

function moveBoxBack() {
  sliderSection.style.animationName = 'moveBack';
  sliderSection.addEventListener('animationend', function() {
    sliderSection.style.animationName = '';
  });

}

function nextPage() {
  if (
    targetPage + 1 === pageCount &&
    !nextPageBtn.classList.contains("button-arrow_inactive")
  ) {
    nextPageBtn.classList.add("button-arrow_inactive");
    lastPageBtn.classList.add("button-arrow_inactive");
  }

  if (prevPageBtn.classList.contains("button-arrow_inactive")){
    prevPageBtn.classList.remove("button-arrow_inactive");
    startPageBtn.classList.remove("button-arrow_inactive");
  }
  

  targetPage++;
  curPage++;
  moveBoxForward();
  currentPageBtn.textContent = `${targetPage}`;
  for (let i = 0; i < pageElements; i++) {
    animalCards[i].querySelector("img").src = paginationItems[curPage][i].img;
    animalCards[i].querySelector(".animal-item__name").textContent =
      paginationItems[curPage][i].name;
  }
}

function lastPage() {
  nextPageBtn.classList.add("button-arrow_inactive");
  lastPageBtn.classList.add("button-arrow_inactive");
  
  if (prevPageBtn.classList.contains("button-arrow_inactive")){
    prevPageBtn.classList.remove("button-arrow_inactive");
    startPageBtn.classList.remove("button-arrow_inactive");
  }
  
  moveBoxForward();
  targetPage = pageCount;
  curPage = pageCount - 1;
  currentPageBtn.textContent = `${targetPage}`;
  const pageElements = getElementsOnPages();
  for (let i = 0; i < pageElements; i++) {
    animalCards[i].querySelector("img").src = paginationItems[curPage][i].img;
    animalCards[i].querySelector(".animal-item__name").text =
      paginationItems[curPage][i].name;
  }
}

function prevPage() {
  if (targetPage - 1 <= 1 &&
    !prevPageBtn.classList.contains("button-arrow_inactive")
    ) {
      prevPageBtn.classList.add("button-arrow_inactive");
      startPageBtn.classList.add("button-arrow_inactive");
    }
    
    if (nextPageBtn.classList.contains("button-arrow_inactive")){
      nextPageBtn.classList.remove("button-arrow_inactive");
      lastPageBtn.classList.remove("button-arrow_inactive");
    }

  targetPage--;
  curPage--;
  moveBoxBack();

  currentPageBtn.textContent = `${targetPage}`;
  for (let i = 0; i < pageElements; i++) {
    animalCards[i].querySelector("img").src = paginationItems[curPage][i].img;
    animalCards[i].querySelector(".animal-item__name").textContent =
      paginationItems[curPage][i].name;
  }
}

function startPage() {
  prevPageBtn.classList.add("button-arrow_inactive");
  startPageBtn.classList.add("button-arrow_inactive");
  
  if (prevPageBtn.classList.contains("button-arrow_inactive")){
    nextPageBtn.classList.remove("button-arrow_inactive");
    lastPageBtn.classList.remove("button-arrow_inactive");
  }

  targetPage = 1;
  curPage = 0;
  moveBoxBack();

  currentPageBtn.textContent = `${targetPage}`;
  const pageElements = getElementsOnPages();
  for (let i = 0; i < pageElements; i++) {
    animalCards[i].querySelector("img").src = paginationItems[curPage][i].img;
    animalCards[i].querySelector(".animal-item__name").text =
      paginationItems[curPage][i].name;
  }
}


nextPageBtn.addEventListener("click", nextPage);
lastPageBtn.addEventListener("click", lastPage);
prevPageBtn.addEventListener('click', prevPage);
startPageBtn.addEventListener('click', startPage);
