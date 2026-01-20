import type { addCardGroupButtonProps } from '../../interfaces'

export default function NewCardGroupButton({
    toggleAddCardGroup,
    subjectIndex,
    setEditSubjectIndex,
}: addCardGroupButtonProps) {
    return (
        <button
            className="newCardGroupButton"
            onClick={() => {
                toggleAddCardGroup(true)
                setEditSubjectIndex(subjectIndex)
            }}
        >
            <img src="assets/plus_icon_6d0037.svg" alt="Plus icon" />
        </button>
    )
}
