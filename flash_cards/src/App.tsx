import { useState, useEffect } from 'react'
import './index.css'
import type {
    Subject,
    CardNextButtonProps,
    subjectInfoProps,
    subjectEditProps,
} from './interfaces.tsx'
import HomePage from './components/HomePage.tsx'

//flashcards
//create / delete / edit cards
//sorted by subject on the top level, then by asignment / test, which will house the individual flashcards
//colour and icon can be edited by each individual subject
//or maybe just overall colour themes, to avoid having to make a colour picker
//stores data locally as a json file
//add / delete / hide cards once the "flipbook" is already made
//

//function to shuffle the correct and incorrect answers together
//taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array: string[]) {
    let newArray = array
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
}

function CardNextButton({
    cardIndex,
    setCardIndex,
    cardArray,
    cardAnswered,
}: CardNextButtonProps) {
    //if the user is at the last card
    //TODO: add a different state when the user hasn't put in an answer vs when they have. ie. "submit" or "skip"
    if (cardIndex == cardArray.length - 1) {
        //onClick run function that needs to run when the user if finished with a card set
        return <button>Finish</button>
    } else if (!cardAnswered) {
        return (
            <button
                onClick={() => {
                    setCardIndex(cardIndex + 1)
                }}
            >
                Skip
            </button>
        )
    } else {
        return (
            <button
                onClick={() => {
                    setCardIndex(cardIndex + 1)
                }}
            >
                Submit
            </button>
        )
    }
}

//parameters are correct answer, users answer
//returns a boolean, true if the answer is correct, false if the answer is incorrect
function handleCardSubmit(correctAnswer: string, givenAnswer: string) {
    correctAnswer = correctAnswer.toLowerCase()
    givenAnswer = givenAnswer.toLowerCase()
    return correctAnswer === givenAnswer
}

//how the overall object will be laid out

let fillerData: Subject[] = [
    {
        title: 'science',
        cardGroups: [
            {
                title: 'test 1',
                dateCreated: 1,
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
            {
                title: 'test 2',
                dateCreated: 1,
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
        cardGroups: [
            {
                title: 'test 1',
                dateCreated: 1,
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

function EditCard() {}

function submitAnswer(
    { submittedAnswer }: { submittedAnswer: string },
    { correctAnswer }: { correctAnswer: string }
) {
    return submittedAnswer === correctAnswer
}

function FlashCard() {
    const [cardIndex, setCardIndex] = useState(0)
    const [prevCardIndex, setPrevCardIndex] = useState(0)
    const [cardAnswer, setCardAnswer] = useState('')
    const [cardScore, updateCardScore] = useState([])

    const correctAnswer =
        fillerData[0].cardGroups[0].cards[cardIndex].correctAnswer

    let shuffledAnswers = [
        fillerData[0].cardGroups[0].cards[cardIndex].correctAnswer,
        ...fillerData[0].cardGroups[0].cards[cardIndex].incorrectAnswers,
    ]

    //shuffle answers when a new card appears so the correct answer is not always in the same place
    if (cardIndex !== prevCardIndex) {
        setPrevCardIndex(cardIndex)
        setCardAnswer('')
        shuffledAnswers = shuffleArray([
            fillerData[0].cardGroups[0].cards[cardIndex].correctAnswer,
            ...fillerData[0].cardGroups[0].cards[cardIndex].incorrectAnswers,
        ])
    }

    return (
        <>
            <h3>{fillerData[0].cardGroups[0].cards[cardIndex].question}</h3>
            {shuffledAnswers.map((answer) => {
                return (
                    <button onClick={() => setCardAnswer(answer)}>
                        {answer}
                    </button>
                )
            })}
            <CardNextButton
                cardIndex={cardIndex}
                setCardIndex={setCardIndex}
                cardArray={fillerData[0].cardGroups[0].cards}
                cardAnswered={cardAnswer !== ''}
            />
        </>
    )
}

function App() {
    const [subjects, updateSubjects] = useState(fillerData)
    return (
        <>
            {/* <FlashCard /> */}
            <HomePage
                subjectData={subjects}
                updateSubjectData={updateSubjects}
            />
        </>
    )
}

export default App
