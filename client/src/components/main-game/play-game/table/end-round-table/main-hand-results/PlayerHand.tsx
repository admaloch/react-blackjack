import CardUrlValsProps from "../../../../../../models/CardUrlVals";
import { PlayerInterface } from "../../../../../../models/PlayerProps";
import Card from "../../../display-cards/Card";

export interface PlayerProps {
  player: PlayerInterface;
}

export default function PlayerHand({ cardUrlVals }: CardUrlValsProps) {
  return (
    <div className="curr-player-hand">
      {cardUrlVals.map((card, index) => (
        <Card key={index} cardUrlVal={card} isHidden={false} />
      ))}
    </div>
  );
}
