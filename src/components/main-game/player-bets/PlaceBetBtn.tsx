interface PlaceBetBtnProps {
    nextPlayerHandler: () => void;
    isBetValid: boolean;
}

export default function PlaceBetBtn({ nextPlayerHandler, isBetValid }: PlaceBetBtnProps) {

    return (
        <button className={isBetValid ? 'game-btn' : 'game-btn disabled'} onClick={nextPlayerHandler}>
            Place Bet
        </button>
    );
}
