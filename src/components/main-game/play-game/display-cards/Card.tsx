import React, { useState, useEffect } from 'react';

interface CardProp {
  cardUrlVal: string;
  isHidden: boolean; // New prop to indicate whether the card should be hidden
}

const Card: React.FC<CardProp> = ({ cardUrlVal, isHidden }) => {
  const imagePath = `/src/assets/card-images/${cardUrlVal}.png`;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true when the image is loaded
    const image = new Image();
    image.src = imagePath;
    image.onload = () => {
      setIsLoaded(true);
    };
  }, [imagePath]);



  return (
    <div className={`playing-card ${isLoaded ? 'animate-in' : ''} ${isHidden ? 'hidden' : ''}`}>
      <img
        style={{ opacity: isLoaded ? 1 : 0 }}
        src={imagePath}
        alt={`${cardUrlVal}.png`}
      />
    </div>
  );
};

export default Card;
