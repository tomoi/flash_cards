import type { addSubjectButtonProps } from '../../interfaces'

export default function NewSubjectButton({
    toggleAddSubject,
}: addSubjectButtonProps) {
    return (
        <button
            className="newSubjectButton"
            onClick={() => {
                toggleAddSubject(true)
            }}
        >
            <img src="assets/plus_icon_6d0037.svg" alt="Plus icon" />
        </button>
    )
}
