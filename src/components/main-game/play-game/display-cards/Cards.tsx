import Card from './Card'

interface CardsProps {
    cardUrlVals: string[]
}

export default function Cards({ cardUrlVals }: CardsProps) {

    return (
        <div className="curr-hand">
            {cardUrlVals.map(card => (
                <Card
                    key={card}
                    cardUrlVal={card}
                />
            ))}
        </div>
    )
}
