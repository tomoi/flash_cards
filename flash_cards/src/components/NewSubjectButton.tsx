import type { editSubjectButtonProps } from '../interfaces'

export default function NewSubjectButton({
    toggleEditSubjects,
    setEditSubjectIndex,
    subjectArray,
}: editSubjectButtonProps) {
    return (
        <button
            onClick={() => {
                toggleEditSubjects(true)
                setEditSubjectIndex(subjectArray.length)
            }}
        >
            New Subject Button
        </button>
    )
}
