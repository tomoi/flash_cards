import type { addCardGroupButtonProps } from '../interfaces'

export default function NewCardGroupButton({
    toggleAddCardGroup,
    subjectIndex,
    setEditSubjectIndex,
}: addCardGroupButtonProps) {
    return (
        <button
            onClick={() => {
                toggleAddCardGroup(true)
                setEditSubjectIndex(subjectIndex)
            }}
        >
            New CardGroup Button
        </button>
    )
}
