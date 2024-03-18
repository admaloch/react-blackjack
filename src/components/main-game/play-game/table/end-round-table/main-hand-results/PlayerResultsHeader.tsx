import { PlayerInterface } from "../../../../../../models/PlayerProps"
import { ShowMainHandIconWithPopper } from "../../../../../UI/icons/ShowMainHandIconWithPopper"
import { ShowSplitHandIconWithPopper } from "../../../../../UI/icons/ShowSplitHandIconWithPopper"

interface PlayerResultsHeaderProps {
    player: PlayerInterface;
    changeToMainHand: () => void;
    changeToSplitHand: () => void;
    showSplitHand: boolean;
}

export default function PlayerResultsHeader({ player, changeToMainHand, changeToSplitHand, showSplitHand }: PlayerResultsHeaderProps) {

    const isSplitHand = player.splitHand.cards.length !== 0

    return (
        <div className="player-header">
            {isSplitHand && showSplitHand &&
                <div className="main-hand-icon" onClick={changeToMainHand}>
                    <ShowMainHandIconWithPopper />
                </div>
            }
            <h3>{player.name}</h3>
            {isSplitHand && !showSplitHand &&
                <div className="split-hand-icon" onClick={changeToSplitHand}>
                    <ShowSplitHandIconWithPopper />
                </div>
            }
        </div>
    )
}
