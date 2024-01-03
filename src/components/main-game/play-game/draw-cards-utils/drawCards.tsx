const drawCards = (nameInput:string, numCards = 1) => {
    let player = null;
    if (nameInput !== 'Dealer') {
      player = playersArr.find(x => x.name === nameInput);
    } else {
      player = dealerObj;
    }
    if (!player) {
      return null;
    }
    let { hand } = player;
    for (let i = 0; i < numCards; i++) {
      hand = drawCard(hand);
    }
    if (hand.cardValues.includes(11)) {
      console.log('there is an ace')
      hand = changeAceVal(hand);
    }
    return hand;
  };
  
  const drawCard = (hand) => {
    const updatedHand = { ...hand };
    const suits = ['♦', '♣', '♥', '♠'];
    while (true) {
      const suitIndex = Math.floor(Math.random() * 4);
      const cardIndex = Math.floor(Math.random() * 14);
      const numCardLeft = deck[cardIndex].suits[suitIndex];
      if (numCardLeft > 0) {
        const newCard = `${deck[cardIndex].card}${suits[suitIndex]}`;
        updatedHand.cards.push(newCard);
        const newCardVal = deck[cardIndex].value;
        updatedHand.cardValues.push(newCardVal);
        updatedHand.cardSum = updatedHand.cardValues.reduce((a, b) => a + b);
        break;
      }
    }
    return updatedHand;
  };
  
  const changeAceVal = (hand) => {
  
    const updatedHand = { ...hand };
    const { cardValues } = updatedHand;
    while (updatedHand.cardSum > 21) {
      const lastIndex = cardValues.lastIndexOf(11);
      if (lastIndex === -1) break;
      cardValues[lastIndex] = 1;
      updatedHand.cardSum = cardValues.reduce((a, b) => a + b);
    }
    return updatedHand;
  };