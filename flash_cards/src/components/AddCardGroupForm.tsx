import type { cardGroupAddProps } from '../interfaces.tsx'

//form to add a new cardGroup when a button is pressed

export default function AddSubjectForm({
    subjectData,
    subjectIndex,
    updateSubjectData,
    toggleAddCardGroup,
}: cardGroupAddProps) {
    //edit the object when form is submitted
    function handleSubmit(formData: any) {
        let subjectObject = subjectData
        let newCardGroup = {
            title: formData.get('cardGroupTitle'),
            dateCreated: new Date().getTime(),
            dateEdited: new Date().getTime(),
            cards: [],
        }
        subjectObject[subjectIndex].cardGroups.push(newCardGroup)
        console.log(subjectObject)
        updateSubjectData(subjectObject)
        toggleAddCardGroup(false)
    }

    //when form is submitted, update subjectData
    return (
        <>
            <form action={handleSubmit}>
                <input type="text" name="cardGroupTitle" autoFocus required />
                <button type="submit">Save New</button>
                <button onClick={() => toggleAddCardGroup(false)}>
                    Cancel
                </button>
            </form>
        </>
    )
}
