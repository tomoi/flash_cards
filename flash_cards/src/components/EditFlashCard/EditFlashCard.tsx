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

    const [question, updateQuestion] = useState('')
    // updateQuestion(
    //     subjectData[cardIndex[0]].cardGroups[cardIndex[1]].cards[cardIndex[2]]
    //         .question
    // )

    return (
        <div>
            <form action={handleSave}>
                <input
                    name="question"
                    value={question}
                    onChange={(e) => {
                        updateQuestion(e.target.value)
                        console.log(e.target.value)
                    }}
                />
                <input
                    name="correctAnswer"
                    defaultValue={
                        subjectData[cardIndex[0]].cardGroups[cardIndex[1]]
                            .cards[cardIndex[2]].correctAnswer
                    }
                />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
