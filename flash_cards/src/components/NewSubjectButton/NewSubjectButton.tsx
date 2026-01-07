import type { addSubjectButtonProps } from '../interfaces'

export default function NewSubjectButton({
    toggleAddSubject,
}: addSubjectButtonProps) {
    return (
        <button
            onClick={() => {
                toggleAddSubject(true)
            }}
        >
            New Subject Button
        </button>
    )
}
