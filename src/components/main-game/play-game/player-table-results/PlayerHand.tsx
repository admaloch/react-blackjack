import React from 'react'

interface PlayerHandProps {
    card: string;
}

export default function PlayerHand({card}:PlayerHandProps) {
    const imagePath = `/src/assets/card-images/${card}.png`;

  return (
    <div>PlayerHand</div>
  )
}
