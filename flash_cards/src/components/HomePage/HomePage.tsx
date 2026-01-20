import { useState } from 'react'

import EditSubjectTitle from '../EditSubjectTitle/EditSubjectTitle.tsx'
import NewSubjectButton from '../NewSubjectButton/NewSubjectButton.tsx'
import CreatedDate from '../CreatedDate/CreatedDate.tsx'
import NewCardGroupButton from '../NewCardGroupButton/NewCardGroupButton.tsx'
import AddSubjectForm from '../AddSubjectForm/AddSubjectForm.tsx'
import NewCardGroupForm from '../NewCardGroupForm/NewCardGroupForm.tsx'
import CardController from '../CardController/CardController.tsx'
import type { Subject } from '../../interfaces.tsx'

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
            <>
                <div className="singleSubject" key={subject.dateCreated}>
                    <div className="subject-title">
                        {/* change what is displayed based on if the tile is currently being edited */}
                        {editSubjectIndex === subjectIndex && editSubject ? (
                            <>
                                <EditSubjectTitle
                                    subjectData={subjectData}
                                    updateSubjectData={updateSubjectData}
                                    subjectIndex={subjectIndex}
                                    toggleEditSubject={toggleEditSubject}
                                />
                                <p>
                                    Created{' '}
                                    <CreatedDate
                                        date={subject.dateCreated}
                                        displayType="short"
                                    />{' '}
                                </p>
                            </>
                        ) : (
                            <>
                                <h2>{subject.title}</h2>
                                <button
                                    className="editSubjectTitleButton"
                                    onClick={() => {
                                        toggleEditSubject(true)
                                        setEditSubjectIndex(subjectIndex)
                                    }}
                                >
                                    <img
                                        src="assets\edit_24dp_6D0037_FILL0_wght400_GRAD0_opsz24.svg"
                                        alt="edit button"
                                    ></img>
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
                    </div>
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
                                        <h3>{cardGroup.title}</h3>
                                        <p className="date">
                                            <CreatedDate
                                                date={cardGroup.dateCreated}
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
                                            toggleAddCardGroup={
                                                toggleAddCardGroup
                                            }
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
                </div>
                {subjectIndex === subjectArray.length - 1 && (
                    <NewSubjectButton toggleAddSubject={toggleAddSubject} />
                )}
            </>
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
        dateCreated: 1767374648693,
        cardGroups: [
            {
                title: 'test 1',
                dateCreated: 1767356445152,
                dateEdited: 1,
                cards: [
                    {
                        dateCreated: 1767356345152,
                        question: 'What colour is the sky?',
                        correctAnswer: 'blue',
                        incorrectAnswers: ['red', 'green', 'yellow'],
                    },
                    {
                        dateCreated: 1167356345152,
                        question: 'What colour is the grass?',
                        correctAnswer: 'green',
                        incorrectAnswers: ['red', 'blue', 'yellow'],
                    },
                    {
                        dateCreated: 1767350345152,
                        question: 'What colour is the grass?',
                        correctAnswer: 'green',
                        incorrectAnswers: ['red', 'blue', 'yellow'],
                    },
                ],
            },
            {
                title: 'test 2',
                dateCreated: 1367376457874,
                dateEdited: 1,
                cards: [
                    {
                        dateCreated: 17673345152,
                        question: 'What colour is the sky?',
                        correctAnswer: 'blue',
                        incorrectAnswers: ['red', 'green', 'yellow'],
                    },
                    {
                        dateCreated: 1457356345152,
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
        dateCreated: 1767378667081,
        cardGroups: [
            {
                title: 'test 3',
                dateCreated: 1767576472479,
                dateEdited: 1,
                cards: [
                    {
                        dateCreated: 1017356345152,
                        question: 'What colour is the sky?',
                        correctAnswer: 'blue',
                        incorrectAnswers: ['red', 'green', 'yellow'],
                    },
                    {
                        dateCreated: 1767356393752,
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
        dateCreated: 1767374267081,
        cardGroups: [
            {
                title: 'test 3',
                dateCreated: 1767376972479,
                dateEdited: 1,
                cards: [
                    {
                        dateCreated: 1730356345152,
                        question: 'What colour is the sky?',
                        correctAnswer: 'blue',
                        incorrectAnswers: ['red', 'green', 'yellow'],
                    },
                    {
                        dateCreated: 17673563451532,
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
                dateCreated: 1767306472479,
                dateEdited: 1,
                cards: [
                    {
                        dateCreated: 1721356345152,
                        question: 'What colour is the sky?',
                        correctAnswer: 'blue',
                        incorrectAnswers: ['red', 'green', 'yellow'],
                    },
                    {
                        dateCreated: 176735345152,
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
        dateCreated: 1767346667081,
        cardGroups: [
            {
                title: 'test 3',
                dateCreated: 1767976472479,
                dateEdited: 1,
                cards: [
                    {
                        dateCreated: 17028956345152,
                        question: 'What colour is the sky?',
                        correctAnswer: 'blue',
                        incorrectAnswers: ['red', 'green', 'yellow'],
                    },
                    {
                        dateCreated: 1703356345152,
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
        dateCreated: 1167374667081,
        cardGroups: [
            {
                title: 'test 3',
                dateCreated: 1767376472478,
                dateEdited: 1,
                cards: [
                    {
                        dateCreated: 17670326345152,
                        question: 'What colour is the sky?',
                        correctAnswer: 'blue',
                        incorrectAnswers: ['red', 'green', 'yellow'],
                    },
                    {
                        dateCreated: 176735635152,
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
        dateCreated: 1767377667081,
        cardGroups: [
            {
                title: 'test 3',
                dateCreated: 1767376472879,
                dateEdited: 1,
                cards: [
                    {
                        dateCreated: 17610356345152,
                        question: 'What colour is the sky?',
                        correctAnswer: 'blue',
                        incorrectAnswers: ['red', 'green', 'yellow'],
                    },
                    {
                        dateCreated: 1760426345152,
                        question: 'What colour is the grass?',
                        correctAnswer: 'green',
                        incorrectAnswers: ['red', 'blue', 'yellow'],
                    },
                ],
            },
        ],
    },
]
