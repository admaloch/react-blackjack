
interface CardProp {
    cardUrlVal: string;
}

export default function Card({ cardUrlVal }: CardProp) {
    const url = `https://deckofcardsapi.com/static/img/${cardUrlVal}.png`
    
    return (
        <div className="player-card">
            <img src={url} alt={`${cardUrlVal}-card`} />
        </div>
    )
}
