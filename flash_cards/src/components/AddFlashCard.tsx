import type { FlashCardProps } from '../interfaces'

export default function AddFlashCard({
    subjectData,
    updateSubjectData,
    cardIndex,
    setCardIndex,
}: FlashCardProps) {
    function handleSave(formData: any) {
        let subjectObject = subjectData
        let newCard = {
            question: formData.get('question'),
            correctAnswer: formData.get('correctAnswer'),
            incorrectAnswers: [],
        }
        subjectObject[cardIndex[0]].cardGroups[cardIndex[1]].cards.push(newCard)
    }

    return (
        <form action={handleSave}>
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
