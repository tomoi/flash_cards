import type { subjectEditProps } from '../../interfaces.tsx'

// Component to display a field to edit an already existing subject

export default function EditSubjectTitle({
    subjectData,
    updateSubjectData,
    subjectIndex,
    toggleEditSubject,
}: subjectEditProps) {
    function handleSubmit(formData: any) {
        let newSubjectData = subjectData
        newSubjectData[subjectIndex].title = formData.get('subjectTitle')
        updateSubjectData(newSubjectData)
        toggleEditSubject(false)
        return
    }
    return (
        <form action={handleSubmit} className="editSubjectTitleForm">
            <input
                type="text"
                name="subjectTitle"
                defaultValue={subjectData[subjectIndex].title}
                autoFocus
            />
            <button type="submit">Save</button>
            <button
                onClick={() => {
                    toggleEditSubject(false)
                }}
            >
                Cancel
            </button>
        </form>
    )
}
