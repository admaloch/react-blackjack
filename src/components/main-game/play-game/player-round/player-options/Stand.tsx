
interface StandProps {
    endRound: () => void;
}

export default function Stand({ endRound }: StandProps) {

    const standBtnHandler = () => {
        setTimeout(() => {
            endRound()
        }, 350)
    }

    return (
        <div className="player-btn-container">
            <button
                onClick={standBtnHandler}
                className="game-btn stand-btn">Stay
            </button>
        </div>
    )
}
