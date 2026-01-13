import type { FlashCardProps } from '../../interfaces'

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

        console.log(newSubjectData)

        updateSubjectData(newSubjectData)

        setCardDisplayType('flip')
    }
    return (
        <div>
            <form action={handleSave}>
                <input
                    name="question"
                    defaultValue={
                        subjectData[cardIndex[0]].cardGroups[cardIndex[1]]
                            .cards[cardIndex[2]].question
                    }
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
