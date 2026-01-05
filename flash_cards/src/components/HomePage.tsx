import { useState } from 'react'

import EditSubjectTitle from './EditSubjectTitle.tsx'
import NewSubjectButton from './NewSubjectButton.tsx'
import CreatedDate from './CreatedDate.tsx'
import NewCardGroupButton from './NewCardGroupButton.tsx'
import AddSubjectForm from './AddSubjectForm.tsx'
import NewCardGroupForm from './NewCardGroupForm.tsx'

import type { subjectInfoProps, cardDisplayTypes } from '../interfaces.tsx'
import ShowCardGroupButton from './ShowCardGroupButton.tsx'
import CardController from './CardController.tsx'

export default function HomePage({
    subjectData,
    updateSubjectData,
}: subjectInfoProps) {
    const [addSubject, toggleAddSubject] = useState(false)
    const [editSubjectIndex, setEditSubjectIndex] = useState(0)
    const [editSubject, toggleEditSubject] = useState(false)
    const [addCardGroup, toggleAddCardGroup] = useState(false)
    const [showCard, toggleShowCard] = useState(false)
    const [selectedCardGroup, setSelectedCardGroup] = useState<
        [number, number]
    >([0, 0])
    const [cardDisplayType, setCardDisplayType] =
        useState<cardDisplayTypes['propCardType']>()

    //display if there is no information on launch
    if (subjectData.length === 0) {
        return (
            <>
                <h2>Create a new subject to start!</h2>
                <NewSubjectButton toggleAddSubject={toggleAddSubject} />
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

    let homeSections = subjectData.map(
        (subject, subjectIndex, subjectArray) => (
            <div className="singleSubject" key={subject.dateCreated}>
                {/* change what is displayed based on if the tile is currently being edited */}
                {editSubjectIndex === subjectIndex && editSubject ? (
                    <EditSubjectTitle
                        subjectData={subjectData}
                        updateSubjectData={updateSubjectData}
                        subjectIndex={subjectIndex}
                        toggleEditSubject={toggleEditSubject}
                    />
                ) : (
                    <>
                        <h2>{subject.title}</h2>
                        <button
                            onClick={() => {
                                toggleEditSubject(true)
                                setEditSubjectIndex(subjectIndex)
                            }}
                        >
                            Edit Title
                        </button>
                        <p>
                            Created{' '}
                            <CreatedDate
                                date={subject.dateCreated}
                                displayType="short"
                            />
                        </p>
                    </>
                )}
                <div className="subjectCardGroups">
                    {subject.cardGroups.map(
                        (cardGroup, cardGroupIndex, cardGroupArray) => (
                            <>
                                <div
                                    className="singleCardGroup"
                                    key={cardGroup.dateCreated}
                                >
                                    <p>{cardGroup.title}</p>
                                    <p>
                                        Created{' '}
                                        <CreatedDate
                                            date={cardGroup.dateCreated}
                                            displayType="short"
                                        />
                                    </p>
                                    <p>
                                        Last Edited{' '}
                                        <CreatedDate
                                            date={cardGroup.dateEdited}
                                            displayType="short"
                                        />
                                    </p>
                                    <ShowCardGroupButton
                                        toggleShowCard={toggleShowCard}
                                        selectedCardGroup={[
                                            subjectIndex,
                                            cardGroupIndex,
                                        ]}
                                        setSelectedCardGroup={
                                            setSelectedCardGroup
                                        }
                                        setCardDisplayType={setCardDisplayType}
                                        propCardType="editCard"
                                    />
                                </div>
                                {addCardGroup &&
                                    editSubjectIndex === subjectIndex &&
                                    cardGroupIndex ===
                                        cardGroupArray.length - 1 && (
                                        <NewCardGroupForm
                                            subjectData={subjectData}
                                            subjectIndex={subjectIndex}
                                            updateSubjectData={
                                                updateSubjectData
                                            }
                                            toggleAddCardGroup={
                                                toggleAddCardGroup
                                            }
                                        />
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
                    {/* button to add card group after the last card group appears, or if there are no card groups to display */}
                    {addCardGroup &&
                        editSubjectIndex === subjectIndex &&
                        subject.cardGroups.length === 0 && (
                            <NewCardGroupForm
                                subjectData={subjectData}
                                subjectIndex={subjectIndex}
                                updateSubjectData={updateSubjectData}
                                toggleAddCardGroup={toggleAddCardGroup}
                            />
                        )}
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
            {showCard && (
                <CardController
                    subjectData={subjectData}
                    updateSubjectData={updateSubjectData}
                    propCardType={cardDisplayType}
                    propCardIndex={[...selectedCardGroup, 0]}
                />
            )}
        </>
    )
}
