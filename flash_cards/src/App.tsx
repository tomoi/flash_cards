import { useState } from 'react'
import './index.css'
import type { Subject } from './interfaces.tsx'
import HomePage from './components/HomePage/HomePage.tsx'
import Footer from './components/Footer/Footer.tsx'
import Header from './components/Header/Header.tsx'

//flashcards
//create / delete / edit cards
//sorted by subject on the top level, then by assignment / test, which will house the individual flashcards
//colour and icon can be edited by each individual subject
//or maybe just overall colour themes, to avoid having to make a colour picker
//stores data locally as a json file
//add / delete / hide cards once the "flip-book" is already made
// maybe have the users answers that are incorrect become the incorrect answers that are displayed the next time, as long as it isn't just a spelling mistake

//how the overall object will be laid out

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
