import type { subjectAddProps } from '../interfaces.tsx'

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
                title: formData.get('cardGroupTitle'),
                dateCreated: new Date().getTime(),
                cardGroups: [],
            },
        ])
        toggleAddSubject(false)
    }

    //when form is submitted, update subjectData
    return (
        <>
            <form action={handleSubmit}>
                <input type="text" name="cardGroupTitle" autoFocus required />
                <button type="submit">Save</button>
                <button onClick={() => toggleAddSubject(false)}>Cancel</button>
            </form>
        </>
    )
}
