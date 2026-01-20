import type { FlashCardProps } from '../../interfaces'

export default function AddFlashCard({
    subjectData,
    updateSubjectData,
    cardIndex,
}: FlashCardProps) {
    function handleSave(formData: any) {
        let newSubjectData = subjectData
        let newCard = {
            dateCreated: new Date().getTime(),
            question: formData.get('question'),
            correctAnswer: formData.get('correctAnswer'),
            incorrectAnswers: [],
        }
        newSubjectData[cardIndex[0]].cardGroups[cardIndex[1]].cards.push(
            newCard
        )
        updateSubjectData(newSubjectData)
    }

    return (
        <form action={handleSave} className="addCardForm">
            <label htmlFor="question">Question: </label>
            <input
                type="text"
                name="question"
                placeholder="Type question here."
            />
            <label htmlFor="correctAnswer">Correct Answer: </label>
            <input
                type="text"
                name="correctAnswer"
                placeholder="Type correct answer here."
            />
            <button type="submit">Save</button>
        </form>
    )
}
