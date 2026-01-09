import type { FlashCardProps } from '../../interfaces'

export default function FlashCardFlip({
    subjectData,
    updateSubjectData,
    cardIndex,
    setCardIndex,
}: FlashCardProps) {
    return (
        <>
            <h3>
                {
                    subjectData[cardIndex[0]].cardGroups[cardIndex[1]].cards[
                        cardIndex[2]
                    ].question
                }
            </h3>
            <p>Flip</p>
        </>
    )
}
