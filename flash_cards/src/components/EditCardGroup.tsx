import { useState } from 'react'

import type {
    Subject,
    CardNextButtonProps,
    subjectInfoProps,
    subjectEditProps,
} from '../interfaces.tsx'

export default function EditCardGroup({
    subjectData,
    updateSubjectData,
    subjectIndex,
}: subjectEditProps) {
    function handleSubmit(formData: any) {
        if (subjectData[subjectIndex] === undefined) {
            console.log(formData)
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
