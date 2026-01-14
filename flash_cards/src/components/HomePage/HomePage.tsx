import { useState } from 'react'

import EditSubjectTitle from '../EditSubjectTitle/EditSubjectTitle.tsx'
import NewSubjectButton from '../NewSubjectButton/NewSubjectButton.tsx'
import CreatedDate from '../CreatedDate/CreatedDate.tsx'
import NewCardGroupButton from '../NewCardGroupButton/NewCardGroupButton.tsx'
import AddSubjectForm from '../AddSubjectForm/AddSubjectForm.tsx'
import NewCardGroupForm from '../NewCardGroupForm/NewCardGroupForm.tsx'
import CardController from '../CardController/CardController.tsx'
import type { Subject } from '../../interfaces.tsx'

import './homePage.css'

import type { subjectInfoProps } from '../../interfaces.tsx'

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
        [number, number, number]
    >([0, 0, 0])
    //display if there is no information on launch
    if (subjectData.length === 0) {
        return (
            <main>
                <h2>Create a new subject to start!</h2>
                <NewSubjectButton toggleAddSubject={toggleAddSubject} />
                {addSubject && (
                    <AddSubjectForm
                        subjectData={subjectData}
                        updateSubjectData={updateSubjectData}
                        toggleAddSubject={toggleAddSubject}
                    />
                )}
                <button
                    onClick={() => {
                        updateSubjectData(fillerData)
                    }}
                >
                    Use filler data
                </button>
            </main>
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
                                    onClick={() => {
                                        toggleShowCard(true)
                                        setSelectedCardGroup([
                                            subjectIndex,
                                            cardGroupIndex,
                                            0,
                                        ])
                                    }}
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
        <main>
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
                    cardIndex={selectedCardGroup}
                    setCardIndex={setSelectedCardGroup}
                    toggleShowCard={toggleShowCard}
                />
            )}
        </main>
    )
}

let fillerData: Subject[] = [
    {
        title: 'science',
        dateCreated: 1767374640693,
        cardGroups: [
            {
                title: 'test 1',
                dateCreated: 1767376445152,
                dateEdited: 1,
                cards: [
                    {
                        question: 'What colour is the sky?',
                        correctAnswer: 'blue',
                        incorrectAnswers: ['red', 'green', 'yellow'],
                    },
                    {
                        question: 'What colour is the grass?',
                        correctAnswer: 'green',
                        incorrectAnswers: ['red', 'blue', 'yellow'],
                    },
                    {
                        question: 'What colour is the grass?',
                        correctAnswer: 'green',
                        incorrectAnswers: ['red', 'blue', 'yellow'],
                    },
                ],
            },
            {
                title: 'test 2',
                dateCreated: 1767376457874,
                dateEdited: 1,
                cards: [
                    {
                        question: 'What colour is the sky?',
                        correctAnswer: 'blue',
                        incorrectAnswers: ['red', 'green', 'yellow'],
                    },
                    {
                        question: 'What colour is the grass?',
                        correctAnswer: 'green',
                        incorrectAnswers: ['red', 'blue', 'yellow'],
                    },
                ],
            },
        ],
    },
    {
        title: 'math',
        dateCreated: 1767374667081,
        cardGroups: [
            {
                title: 'test 3',
                dateCreated: 1767376472479,
                dateEdited: 1,
                cards: [
                    {
                        question: 'What colour is the sky?',
                        correctAnswer: 'blue',
                        incorrectAnswers: ['red', 'green', 'yellow'],
                    },
                    {
                        question: 'What colour is the grass?',
                        correctAnswer: 'green',
                        incorrectAnswers: ['red', 'blue', 'yellow'],
                    },
                ],
            },
        ],
    },
]
