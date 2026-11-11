function getCardsToShow(characterPool, selectedCharacters, cardsShown) {
  const charactersAvailable = [];
  const selectedDigimons = [];
  for (const character of characterPool) {
    if (selectedCharacters.includes(character.id)) {
      selectedDigimons.push(character);
    } else {
      charactersAvailable.push(character);
    }
  }

  const firstDigimon = getRandomDigimon(charactersAvailable);

  const remainingSpaces = cardsShown - 1;
  const firstHalf = Math.ceil(remainingSpaces / 2);
  const secondHalf = Math.floor(remainingSpaces / 2);

  const randomNumber = Math.floor(Math.random() * 2);
  let availableCount, selectedCount;
  if (randomNumber === 0) {
    availableCount = firstHalf;
    selectedCount = secondHalf;
  } else {
    availableCount = secondHalf;
    selectedCount = firstHalf;
  }

  if (availableCount > charactersAvailable.length) {
    selectedCount += availableCount - charactersAvailable.length;
    availableCount = charactersAvailable.length;
  }
  if (selectedCount > selectedDigimons.length) {
    availableCount += selectedCount - selectedDigimons.length;
    selectedCount = selectedDigimons.length;
  }

  const availableSelection = getRandomElements(
    charactersAvailable,
    availableCount,
  );
  const selectedSelection = getRandomElements(selectedDigimons, selectedCount);

  const cards = [firstDigimon, ...availableSelection, ...selectedSelection];
  const cardsToShow = getRandomElements(cards, cards.length);
  return cardsToShow;
}

function getRandomElements(array, count) {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }

  return shuffledArray.slice(0, count);
}

function getRandomDigimon(array) {
  const removeRandom = array.splice(
    Math.floor(Math.random() * array.length),
    1,
  )[0];
  return removeRandom;
}

export { getCardsToShow };
