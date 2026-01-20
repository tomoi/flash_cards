import type { FlashCardProps } from '../../interfaces'
import { useState } from 'react'

export default function EditFlashCard({
    subjectData,
    updateSubjectData,
    cardIndex,
    setCardDisplayType,
}: FlashCardProps) {
    function handleSave(formData: any) {
        let newSubjectData = subjectData

        newSubjectData[cardIndex[0]].cardGroups[cardIndex[1]].cards[
            cardIndex[2]
        ].question = formData.get('question')

        newSubjectData[cardIndex[0]].cardGroups[cardIndex[1]].cards[
            cardIndex[2]
        ].correctAnswer = formData.get('correctAnswer')

        updateSubjectData(newSubjectData)

        setCardDisplayType('flip')
    }

    const [formData, updateFormData] = useState<string[]>([
        subjectData[cardIndex[0]].cardGroups[cardIndex[1]].cards[cardIndex[2]]
            .question,
        subjectData[cardIndex[0]].cardGroups[cardIndex[1]].cards[cardIndex[2]]
            .correctAnswer,
    ])

    const [prevCardIndex, setPrevCardIndex] = useState(cardIndex)

    if (cardIndex !== prevCardIndex) {
        setPrevCardIndex(cardIndex)
        updateFormData([
            subjectData[cardIndex[0]].cardGroups[cardIndex[1]].cards[
                cardIndex[2]
            ].question,
            subjectData[cardIndex[0]].cardGroups[cardIndex[1]].cards[
                cardIndex[2]
            ].correctAnswer,
        ])
    }

    return (
        <div className="cardEditForm">
            <form action={handleSave}>
                <input
                    name="question"
                    value={formData[0]}
                    onChange={(e) => {
                        updateFormData([e.target.value, formData[1]])
                        console.log(e.target.value)
                    }}
                />
                <input
                    name="correctAnswer"
                    value={formData[1]}
                    onChange={(e) => {
                        updateFormData([formData[0], e.target.value])
                        console.log(e.target.value)
                    }}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
