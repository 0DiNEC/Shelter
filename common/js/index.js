function getRandomCards(number) {
  let cardSet = [];

  for (let i = 0; i < number; i++) {
      let randomCard = Math.floor(Math.random() * petsData.length);

      while (cardSet.includes(randomCard)) {
          randomCard = Math.floor(Math.random() * petsData.length);
      }

      cardSet.push(randomCard);
  }

  return cardSet;
}


function createCardSet(set, cardSet) {
  for (let i = 0; i < cardSet.length; i++) {
      let card = document.createElement('div');
      card.classList.add('slider__animal-item');
      set.append(card);

      let cardImage = document.createElement('img');
      cardImage.src = petsData[cardSet[i]].img;
      cardImage.alt = petsData[cardSet[i]].name;
      cardImage.classList.add('card__image');
      card.append(cardImage);

      let cardTitle = document.createElement('span');
      cardTitle.classList.add('card__title');
      cardTitle.innerHTML = petsData[cardSet[i]].name;
      card.append(cardTitle);

      let cardButton = document.createElement('button');
      cardButton.classList.add('button', 'button_secondary', 'card__button');
      cardButton.innerHTML = 'Learn more';
      card.append(cardButton);

      card.setAttribute('data-number', cardSet[i]);
  }
}

function createSlider(number) {
  activeRandom = getRandomCards(number);
  leftRandom = getRandomCards(number);
  rightRandom = getRandomCards(number);

  while (activeRandom.some(i => leftRandom.indexOf(i) >= 0)) {
      leftRandom = getRandomCards(number);
  }

  while (activeRandom.some(i => rightRandom.indexOf(i) >= 0)) {
      rightRandom = getRandomCards(number);
  }

  createCardSet(activeSet, activeRandom);
  createCardSet(leftSet, leftRandom);
  createCardSet(rightSet, rightRandom);
}