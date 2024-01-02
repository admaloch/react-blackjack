
interface BetTokenProps {
    number: number;
    tokenClickHandler: (number: number) => void;
}

export default function BetToken({ number, tokenClickHandler }: BetTokenProps) {
    return (
        <div
        className="betting-token"
        onClick={() => tokenClickHandler(number)}>
            {number}
        </div>
    );
}
