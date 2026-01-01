import type { subjectEditProps } from '../interfaces.tsx'

export default function EditCardGroup({
    subjectData,
    updateSubjectData,
    subjectIndex,
    toggleEditSubjects,
}: subjectEditProps) {
    function handleSubmit(formData: any) {
        if (subjectData[subjectIndex] === undefined) {
            console.log(formData)

            updateSubjectData([
                ...subjectData,
                { title: formData.get('cardGroupTitle'), cardGroups: [] },
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
                <input type="text" name="cardGroupTitle" />
                <button type="submit">Save</button>
            </form>
        </>
    )
}
