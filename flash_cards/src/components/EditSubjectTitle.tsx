import type { subjectEditProps } from '../interfaces.tsx'

// Component to display a field to edit an already existing subject

//switches between title and form so the title can be edited in place

function EditSubjectForm({
    subjectData,
    updateSubjectData,
    subjectIndex,
    toggleEditSubjects,
}: subjectEditProps) {
    //function to edit the subject object when the form is submitted
    function handleSubmit(formData: any) {
        if (subjectData[subjectIndex] === undefined) {
            updateSubjectData([
                ...subjectData,
                {
                    title: formData.get('cardGroupTitle'),
                    dateCreated: new Date().getTime(),
                    cardGroups: [],
                },
            ])
            toggleEditSubjects(false)

            return
        }
        console.log('Working?')
    }

    //when form is submitted, update subjectData
    return (
        <>
            <form action={handleSubmit}>
                <input
                    type="text"
                    name="cardGroupTitle"
                    // defaultValue={subjectData[subjectIndex].title}
                    autoFocus
                    required
                />
                <button type="submit">Save</button>
            </form>
        </>
    )
}

export default function EditSubjectTitle({
    subjectData,
    updateSubjectData,
    subjectIndex,
    toggleEditSubject,
}: subjectEditProps) {}
