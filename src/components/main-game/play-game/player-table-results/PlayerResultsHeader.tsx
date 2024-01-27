import { ShowMainHandIconWithPopper } from "../../../UI/icons/ShowMainHandIconWithPopper"
import { ShowSplitHandIconWithPopper } from "../../../UI/icons/ShowSplitHandIconWithPopper"

export default function PlayerResultsHeader({ player, changeToMainHand, changeToSplitHand }) {
    return (
        <div className="player-header">
            <div className="main-hand-icon" onClick={changeToMainHand}>
                <ShowMainHandIconWithPopper />
            </div>

            <h4>{player.name}</h4>

            <div className="split-hand-icon" onClick={changeToSplitHand}>
                <ShowSplitHandIconWithPopper />
            </div>
        </div>
    )
}
