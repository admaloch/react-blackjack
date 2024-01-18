import Card from './Card'


interface CardsProps {
    cardUrlVals: string[]
}

export default function Cards({ cardUrlVals }: CardsProps) {

    // console.log('cardUrls kare', cardUrlVals)

    return (
        <div className="curr-hand">
            {cardUrlVals.map((card, index) => (
                <Card
                    key={index}
                    cardUrlVal={card}
                />
            ))}
        </div>
    )
}
