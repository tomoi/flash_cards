import { useState } from 'react'

import EditCardGroup from './EditCardGroup.tsx'

import type { subjectInfoProps } from '../interfaces.tsx'

export default function HomePage({
    subjectData,
    updateSubjectData,
}: subjectInfoProps) {
    const [editSubjects, toggleEditSubjects] = useState(false)
    const [editSubjectIndex, setEditSubjectIndex] = useState(0)

    let homeSections = subjectData.map(
        (subject, subjectIndex, subjectArray) => (
            <>
                <p>{subject.title}</p>
                {subject.cardGroups.map(
                    (cardGroup, cardGroupIndex, cardGroupArray) => (
                        <>
                            <p>{cardGroup.title}</p>
                            <p>Created: {cardGroup.dateCreated}</p>
                            <p>Last Edited: {cardGroup.dateEdited}</p>
                            {cardGroupIndex === cardGroupArray.length - 1 && (
                                <p>Last Card Group</p>
                            )}
                        </>
                    )
                )}
                {subjectIndex === subjectArray.length - 1 && (
                    <button
                        onClick={() => {
                            toggleEditSubjects(true)
                            setEditSubjectIndex(subjectArray.length)
                        }}
                    >
                        Add New Subject
                    </button>
                )}
            </>
        )
    )
    return (
        <>
            {homeSections}
            {editSubjects && (
                <EditCardGroup
                    subjectData={subjectData}
                    updateSubjectData={updateSubjectData}
                    subjectIndex={editSubjectIndex}
                    toggleEditSubjects={toggleEditSubjects}
                />
            )}
        </>
    )
}
