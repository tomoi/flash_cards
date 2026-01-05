import { useState } from 'react'
import './index.css'
import type { Subject } from './interfaces.tsx'
import HomePage from './components/HomePage.tsx'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'

//flashcards
//create / delete / edit cards
//sorted by subject on the top level, then by assignment / test, which will house the individual flashcards
//colour and icon can be edited by each individual subject
//or maybe just overall colour themes, to avoid having to make a colour picker
//stores data locally as a json file
//add / delete / hide cards once the "flip-book" is already made
// maybe have the users answers that are incorrect become the incorrect answers that are displayed the next time, as long as it isn't just a spelling mistake

//how the overall object will be laid out

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

function App() {
    const [subjectData, updateSubjectData] = useState<Subject[]>([])
    // const [subjectData, updateSubjectData] = useState(fillerData)

    return (
        <>
            <Header />
            {/* <FlashCard /> */}
            <HomePage
                subjectData={subjectData}
                updateSubjectData={updateSubjectData}
            />
            <Footer />
        </>
    )
}

export default App
