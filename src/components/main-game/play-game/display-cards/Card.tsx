import React from 'react';


interface CardProp {
  cardUrlVal: string;
}

const Card: React.FC<CardProp> = ({ cardUrlVal }) => {
  const imagePath = `/src/assets/card-images/${cardUrlVal}.png`;


  return (
    <div className="player-card">
      <img src={imagePath} alt={`${cardUrlVal}.png`} />
    </div>
  );
};

export default Card;
