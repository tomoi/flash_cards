import { useState } from 'react'
import type { CardControllerProps, cardDisplayTypes } from '../interfaces'
import EditFlashCard from './EditFlashCard'
import AddFlashCard from './AddFlashCard'

//Component to control how the cards are displayed, to keep the homepage as clean as possible.

export default function CardController({
    propCardIndex,
    subjectData,
    updateSubjectData,
    toggleShowCard,
}: CardControllerProps) {
    //index of selected card, uses three numbers to determine the subject index, the cardGroup index, and the card index. i.e [3, 1, 5]
    const [cardIndex, setCardIndex] = useState(propCardIndex)

    //chooses which component is used to display the card.
    const [cardDisplayType, setCardDisplayType] =
        useState<cardDisplayTypes['propCardType']>('default')

    if (cardDisplayType === 'default') {
        return (
            <div>
                <p>Default Card Group View</p>
                <button
                    onClick={() => {
                        setCardDisplayType('editCard')
                    }}
                    //Disable button if there is no cards to edit in the group
                    disabled={
                        subjectData[cardIndex[0]].cardGroups[cardIndex[1]].cards
                            .length === 0
                    }
                >
                    Edit Mode
                </button>
                <button
                    onClick={() => {
                        setCardDisplayType('addCard')
                    }}
                >
                    Add Cards
                </button>
            </div>
        )
    } else if (cardDisplayType === 'editCard') {
        return (
            <>
                {/* <EditFlashCard /> */}
                <button onClick={() => setCardDisplayType('default')}>
                    Back to default
                </button>
            </>
        )
    } else if (cardDisplayType === 'addCard') {
        return (
            <>
                <AddFlashCard
                    subjectData={subjectData}
                    updateSubjectData={updateSubjectData}
                    cardIndex={cardIndex}
                    setCardIndex={setCardIndex}
                />{' '}
                <button onClick={() => setCardDisplayType('default')}>
                    Back to default
                </button>
            </>
        )
    }
    return (
        <button onClick={() => setCardDisplayType('default')}>
            Back to default
        </button>
    )
}
