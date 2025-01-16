import { useState, useEffect } from "react";

interface CardProp {
  cardUrlVal: string;
  isHidden: boolean;
}

const Card: React.FC<CardProp> = ({ cardUrlVal, isHidden }) => {
  // const imagePath = `../../../../../src/assets/card-images/${cardUrlVal}.png`;
  const imagePath = `https://deckofcardsapi.com/static/img/${cardUrlVal}.png`;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = imagePath;
    image.onload = () => {
      setIsLoaded(true);
    };
  }, [imagePath]);

  return (
    <div
      className={`playing-card ${isLoaded ? "animate-in" : ""} ${isHidden ? "hidden" : ""}`}
    >
      <img
        width={100}
        height={140}
        style={{ opacity: isLoaded ? 1 : 0 }}
        src={imagePath}
        alt={`${cardUrlVal}.png`}
      />
    </div>
  );
};

export default Card;
