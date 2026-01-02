import { useState } from 'react'

import EditCardGroup from './EditCardGroup.tsx'
import NewSubjectButton from './NewSubjectButton.tsx'
import CreatedDate from './CreatedDate.tsx'

import type { subjectInfoProps } from '../interfaces.tsx'

export default function HomePage({
    subjectData,
    updateSubjectData,
}: subjectInfoProps) {
    const [editSubjects, toggleEditSubjects] = useState(false)
    const [editSubjectIndex, setEditSubjectIndex] = useState(0)

    let homeSections = subjectData.map(
        (subject, subjectIndex, subjectArray) => (
            <div className="singleSubject" key={subject.title}>
                <h2>{subject.title}</h2>
                <CreatedDate date={subject.dateCreated} displayType="short" />
                {subject.cardGroups.map(
                    (cardGroup, cardGroupIndex, cardGroupArray) => (
                        <>
                            <div className="cardGroup" key={cardGroup.title}>
                                <p>{cardGroup.title}</p>
                                <p>Created: {cardGroup.dateCreated}</p>
                                <p>Last Edited: {cardGroup.dateEdited}</p>
                            </div>
                            {cardGroupIndex === cardGroupArray.length - 1 && (
                                <p>Last Card Group</p>
                            )}
                        </>
                    )
                )}
                {subjectIndex === subjectArray.length - 1 && (
                    <NewSubjectButton
                        toggleEditSubjects={toggleEditSubjects}
                        setEditSubjectIndex={setEditSubjectIndex}
                        subjectArray={subjectData}
                    />
                )}
            </div>
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
