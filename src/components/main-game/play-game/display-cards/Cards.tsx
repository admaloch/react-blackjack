import Card from './Card'
import './Cards.css'




interface CardsProps {
    cardUrlVals: string[];
    isDealerCardRevealed: boolean; // New prop to indicate whether the first card should be hidden
}

const Cards: React.FC<CardsProps> = ({ cardUrlVals, isDealerCardRevealed }) => {
    return (
        <div className="curr-hand">
            {cardUrlVals.map((cardUrlVal, index) => (
                <Card
                    key={index}
                    cardUrlVal={cardUrlVal}
                    isHidden={!isDealerCardRevealed && index === 0} // Hide the first card if not revealed
                />
            ))}
        </div>
    );
};


export default Cards;
