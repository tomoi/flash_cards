import type { subjectAddProps } from '../../interfaces.tsx'

//form to add a new subject when a button is pressed

export default function AddSubjectForm({
    subjectData,
    updateSubjectData,
    toggleAddSubject,
}: subjectAddProps) {
    //edit the object when form is submitted
    function handleSubmit(formData: any) {
        updateSubjectData([
            ...subjectData,
            {
                title: formData.get('subjectTitle'),
                dateCreated: new Date().getTime(),
                cardGroups: [],
            },
        ])
        toggleAddSubject(false)
        console.log(new Date().getTime())
        console.log(subjectData)
    }

    //when form is submitted, update subjectData
    return (
        <>
            <form action={handleSubmit} className="addSubjectForm">
                <input type="text" name="subjectTitle" autoFocus required />
                <button type="submit">Save</button>
                <button onClick={() => toggleAddSubject(false)}>Cancel</button>
            </form>
        </>
    )
}
