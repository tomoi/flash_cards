import { useState } from 'react'
import './App.css'

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
  let newArray = array;
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}


//how the overall object will be laid out
//might change if I decide to add the settings to the object aswell

let fillerData = [
  {
    "subject": "science",
    "cardGroups": [{
      "title": "test 1",
      "cards": [
        {
          "question": "What colour is the sky?",
          "correct": "blue",
          "incorrect": ["red", "green", "yellow"]
        },
        {
          "question": "What colour is the grass?",
          "correct": "green",
          "incorrect": ["red", "blue", "yellow"]
        },
      ]
    }

    ]
  }
]

function FlashCard() {
  const [cardIndex, setCardIndex] = useState(0);

  const shuffledAnswers = shuffleArray([fillerData[0].cardGroups[0].cards[cardIndex].correct, ...fillerData[0].cardGroups[0].cards[cardIndex].incorrect])
  return <>
    <h3>{fillerData[0].cardGroups[0].cards[cardIndex].question}</h3>
    {shuffledAnswers.map((answer) => {
      return <p>{answer}</p>

    })}
  </>
}

function App() {

  return (
    <>
      <FlashCard />
    </>
  )
}

export default App
