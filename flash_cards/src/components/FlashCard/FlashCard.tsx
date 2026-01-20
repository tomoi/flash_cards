// import { useState } from 'react'

// function submitAnswer(
//     { submittedAnswer }: { submittedAnswer: string },
//     { correctAnswer }: { correctAnswer: string }
// ) {
//     return submittedAnswer === correctAnswer
// }

// //function to shuffle the correct and incorrect answers together
// //taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// function shuffleArray(array: string[]) {
//     let newArray = array
//     for (let i = newArray.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1))
//         ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
//     }
//     return newArray
// }

// export default function FlashCard() {
//     const [cardIndex, setCardIndex] = useState(0)
//     const [prevCardIndex, setPrevCardIndex] = useState(0)
//     const [cardAnswer, setCardAnswer] = useState('')
//     const [cardScore, updateCardScore] = useState([])

//     const correctAnswer =
//         fillerData[0].cardGroups[0].cards[cardIndex].correctAnswer

//     let shuffledAnswers = [
//         fillerData[0].cardGroups[0].cards[cardIndex].correctAnswer,
//         ...fillerData[0].cardGroups[0].cards[cardIndex].incorrectAnswers,
//     ]

//     //shuffle answers when a new card appears so the correct answer is not always in the same place
//     if (cardIndex !== prevCardIndex) {
//         setPrevCardIndex(cardIndex)
//         setCardAnswer('')
//         shuffledAnswers = shuffleArray([
//             fillerData[0].cardGroups[0].cards[cardIndex].correctAnswer,
//             ...fillerData[0].cardGroups[0].cards[cardIndex].incorrectAnswers,
//         ])
//     }

//     return (
//         <>
//             <h3>{fillerData[0].cardGroups[0].cards[cardIndex].question}</h3>
//             {shuffledAnswers.map((answer) => {
//                 return (
//                     <button onClick={() => setCardAnswer(answer)}>
//                         {answer}
//                     </button>
//                 )
//             })}
//             <CardNextButton
//                 cardIndex={cardIndex}
//                 setCardIndex={setCardIndex}
//                 cardArray={fillerData[0].cardGroups[0].cards}
//                 cardAnswered={cardAnswer !== ''}
//             />
//         </>
//     )
// }
