import type { FlashCardProps } from '../../interfaces'
import { useState } from 'react'

export default function FlashCardFlip({
    subjectData,
    cardIndex,
}: FlashCardProps) {
    const [flipped, toggleFlipped] = useState(false)

    if (!flipped) {
        return (
            <div className="cardFlip">
                <h3>
                    {
                        subjectData[cardIndex[0]].cardGroups[cardIndex[1]]
                            .cards[cardIndex[2]].question
                    }
                </h3>
                <button
                    onClick={() => {
                        toggleFlipped(!flipped)
                    }}
                >
                    Flip
                </button>
            </div>
        )
    } else {
        return (
            <div className="cardFlip">
                <h3>
                    {
                        subjectData[cardIndex[0]].cardGroups[cardIndex[1]]
                            .cards[cardIndex[2]].correctAnswer
                    }
                </h3>
                <button
                    onClick={() => {
                        toggleFlipped(!flipped)
                    }}
                >
                    Flip
                </button>
            </div>
        )
    }
}
