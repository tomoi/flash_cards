import type { subjectEditProps } from '../interfaces.tsx'
import CreatedDate from './CreatedDate.tsx'

// Component to display a field to edit an already existing subject

//switches between title and form so the title can be edited in place

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
        console.log(subjectData)
        return
    }
    return (
        <form action={handleSubmit}>
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
