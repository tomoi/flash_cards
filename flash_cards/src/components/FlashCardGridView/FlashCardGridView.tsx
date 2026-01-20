import type { FlashCardGridProps } from '../../interfaces'

export default function FlashCardGrid({
    cardArray,
    setCardIndex,
    providedCardIndex,
}: FlashCardGridProps) {
    // console.log(providedCardIndex)
    return (
        <div className="cardGrid">
            {cardArray.map((card, cardIndex) => (
                <button
                    key={card.dateCreated}
                    className={
                        providedCardIndex[2] === cardIndex
                            ? 'active'
                            : undefined
                    }
                    onClick={() => {
                        setCardIndex([
                            providedCardIndex[0],
                            providedCardIndex[1],
                            cardIndex,
                        ])
                    }}
                >
                    {cardIndex + 1}
                </button>
            ))}
        </div>
    )
}
