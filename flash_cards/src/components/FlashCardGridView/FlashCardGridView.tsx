import type { FlashCardGridProps } from '../../interfaces'

export default function FlashCardGrid({
    cardArray,
    setCardIndex,
    providedCardIndex,
}: FlashCardGridProps) {
    // console.log(providedCardIndex)
    return (
        <div>
            {cardArray.map((card, cardIndex) => (
                <button
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
