import type { subjectEditProps } from '../interfaces.tsx'

export default function EditCardGroup({
    subjectData,
    updateSubjectData,
    subjectIndex,
    toggleEditSubjects,
}: subjectEditProps) {
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
                <input type="text" name="cardGroupTitle" />
                <button type="submit">Save</button>
            </form>
        </>
    )
}
