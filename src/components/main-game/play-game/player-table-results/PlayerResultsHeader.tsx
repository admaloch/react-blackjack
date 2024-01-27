import { ShowMainHandIconWithPopper } from "../../../UI/icons/ShowMainHandIconWithPopper"
import { ShowSplitHandIconWithPopper } from "../../../UI/icons/ShowSplitHandIconWithPopper"

export default function PlayerResultsHeader({ player, changeToMainHand, changeToSplitHand, showSplitHand }) {

    const isSplitHand = player.splitHand.cards.length !== 0

    return (
        <div className="player-header">
            {isSplitHand && showSplitHand &&
                <div className="main-hand-icon" onClick={changeToMainHand}>
                    <ShowMainHandIconWithPopper />
                </div>
            }
            <h4>{player.name}</h4>
            {isSplitHand && !showSplitHand &&
                <div className="split-hand-icon" onClick={changeToSplitHand}>
                    <ShowSplitHandIconWithPopper />
                </div>
            }
        </div>
    )
}
