import { useState } from 'react'
import type { CardControllerProps } from '../interfaces'

//Component to control how the cards are displayed, to keep the homepage as clean as possible.

export default function CardController({
    propCardType,
    propCardIndex,
    subjectData,
    updateSubjectData,
}: CardControllerProps) {
    //index of selected card, uses three numbers to determine the subject index, the cardGroup index, and the card index. i.e [3, 1, 5]
    const [cardIndex, setCardIndex] = useState(propCardIndex)

    //chooses which component is used to display the card. "default", ""
    const [cardDisplay, setCardDisplay] = useState(propCardType)

    if (cardDisplay === 'default') {
        return
    }
    return <p>Hey there</p>
}
