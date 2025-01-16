// Purpose: Pre-fetches all card images to improve performance on card draw

const cardUrls = [
  "https://deckofcardsapi.com/static/img/AH.png",
  "https://deckofcardsapi.com/static/img/2H.png",
  "https://deckofcardsapi.com/static/img/3H.png",
  "https://deckofcardsapi.com/static/img/4H.png",
  "https://deckofcardsapi.com/static/img/5H.png",
  "https://deckofcardsapi.com/static/img/6H.png",
  "https://deckofcardsapi.com/static/img/7H.png",
  "https://deckofcardsapi.com/static/img/8H.png",
  "https://deckofcardsapi.com/static/img/9H.png",
  "https://deckofcardsapi.com/static/img/0H.png",
  "https://deckofcardsapi.com/static/img/JH.png",
  "https://deckofcardsapi.com/static/img/QH.png",
  "https://deckofcardsapi.com/static/img/KH.png",
  "https://deckofcardsapi.com/static/img/AD.png",
  "https://deckofcardsapi.com/static/img/2D.png",
  "https://deckofcardsapi.com/static/img/3D.png",
  "https://deckofcardsapi.com/static/img/4D.png",
  "https://deckofcardsapi.com/static/img/5D.png",
  "https://deckofcardsapi.com/static/img/6D.png",
  "https://deckofcardsapi.com/static/img/7D.png",
  "https://deckofcardsapi.com/static/img/8D.png",
  "https://deckofcardsapi.com/static/img/9D.png",
  "https://deckofcardsapi.com/static/img/0D.png",
  "https://deckofcardsapi.com/static/img/JD.png",
  "https://deckofcardsapi.com/static/img/QD.png",
  "https://deckofcardsapi.com/static/img/KD.png",
  "https://deckofcardsapi.com/static/img/AC.png",
  "https://deckofcardsapi.com/static/img/2C.png",
  "https://deckofcardsapi.com/static/img/3C.png",
  "https://deckofcardsapi.com/static/img/4C.png",
  "https://deckofcardsapi.com/static/img/5C.png",
  "https://deckofcardsapi.com/static/img/6C.png",
  "https://deckofcardsapi.com/static/img/7C.png",
  "https://deckofcardsapi.com/static/img/8C.png",
  "https://deckofcardsapi.com/static/img/9C.png",
  "https://deckofcardsapi.com/static/img/0C.png",
  "https://deckofcardsapi.com/static/img/JC.png",
  "https://deckofcardsapi.com/static/img/QC.png",
  "https://deckofcardsapi.com/static/img/KC.png",
  "https://deckofcardsapi.com/static/img/AS.png",
  "https://deckofcardsapi.com/static/img/2S.png",
  "https://deckofcardsapi.com/static/img/3S.png",
  "https://deckofcardsapi.com/static/img/4S.png",
  "https://deckofcardsapi.com/static/img/5S.png",
  "https://deckofcardsapi.com/static/img/6S.png",
  "https://deckofcardsapi.com/static/img/7S.png",
  "https://deckofcardsapi.com/static/img/8S.png",
  "https://deckofcardsapi.com/static/img/9S.png",
  "https://deckofcardsapi.com/static/img/0S.png",
  "https://deckofcardsapi.com/static/img/JS.png",
  "https://deckofcardsapi.com/static/img/QS.png",
  "https://deckofcardsapi.com/static/img/KS.png",
  "https://deckofcardsapi.com/static/img/back.png",
  "https://images.unsplash.com/photo-1542145177-4dc9b8029711?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1514441615332-67834d513dea?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const preFetchCards = () => {
  console.log("prefetch cards ran");
  const head = document.head;
  cardUrls.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = url;
    link.as = "image";
    head.appendChild(link);
  });
};

export default preFetchCards;
