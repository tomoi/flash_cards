import { useState } from 'react'

import EditSubject from './EditSubjectTitle.tsx'
import NewSubjectButton from './NewSubjectButton.tsx'
import CreatedDate from './CreatedDate.tsx'
import NewCardGroupButton from './NewCardGroupButton.tsx'
import AddSubjectForm from './AddSubjectForm.tsx'

import type { subjectInfoProps } from '../interfaces.tsx'

export default function HomePage({
    subjectData,
    updateSubjectData,
}: subjectInfoProps) {
    const [editSubject, toggleEditSubject] = useState(false)
    const [addSubject, toggleAddSubject] = useState(false)
    const [editSubjectIndex, setEditSubjectIndex] = useState(0)
    const [editCardGroup, toggleEditCardGroup] = useState(false)
    const [addCardGroup, toggleAddCardGroup] = useState(false)
    const [editCardGroupIndex, setEditCardGroupIndex] = useState(0)

    if (subjectData.length === 0) {
        return <NewSubjectButton toggleAddSubject={toggleAddSubject} />
    }

    let homeSections = subjectData.map(
        (subject, subjectIndex, subjectArray) => (
            <div className="singleSubject" key={subject.dateCreated}>
                <h2>{subject.title}</h2>
                <CreatedDate date={subject.dateCreated} displayType="short" />
                <div className="multipleCardGroups">
                    {subject.cardGroups.map(
                        (cardGroup, cardGroupIndex, cardGroupArray) => (
                            <>
                                <div
                                    className="singleCardGroup"
                                    key={cardGroup.dateCreated}
                                >
                                    <p>{cardGroup.title}</p>
                                    <p>Created: {cardGroup.dateCreated}</p>
                                    <p>Last Edited: {cardGroup.dateEdited}</p>
                                </div>
                                {addCardGroup &&
                                    editSubjectIndex === subjectIndex &&
                                    cardGroupIndex ===
                                        cardGroupArray.length - 1 && (
                                        <p>Hey There</p>
                                    )}
                                {cardGroupIndex ===
                                    cardGroupArray.length - 1 && (
                                    <NewCardGroupButton
                                        toggleAddCardGroup={toggleAddCardGroup}
                                        subjectIndex={subjectIndex}
                                        setEditSubjectIndex={
                                            setEditSubjectIndex
                                        }
                                    />
                                )}
                            </>
                        )
                    )}
                    {addCardGroup &&
                        editSubjectIndex === subjectIndex &&
                        subject.cardGroups.length === 0 && <p>Hey There</p>}
                    {subject.cardGroups.length === 0 && (
                        <NewCardGroupButton
                            toggleAddCardGroup={toggleAddCardGroup}
                            subjectIndex={subjectIndex}
                            setEditSubjectIndex={setEditSubjectIndex}
                        />
                    )}
                </div>
                {subjectIndex === subjectArray.length - 1 && (
                    <NewSubjectButton toggleAddSubject={toggleAddSubject} />
                )}
            </div>
        )
    )
    return (
        <>
            {homeSections}
            {addSubject && (
                <AddSubjectForm
                    subjectData={subjectData}
                    updateSubjectData={updateSubjectData}
                    toggleAddSubject={toggleAddSubject}
                />
            )}
        </>
    )
}
