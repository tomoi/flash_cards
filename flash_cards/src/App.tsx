import { useState } from "react";
import "./App.css";

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

interface CardNextButtonProps {
  cardIndex: number;
  setCardIndex: React.Dispatch<React.SetStateAction<number>>;
  cardArray: object[];
}

interface Subject {
  title: string;
  cardGroups: CardSet[];
}

interface CardSet {
  title: string;
  dateCreated: number;
  dateEdited: number;
  cards: Card[];
}

interface Card {
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

function CardNextButton({
  cardIndex,
  setCardIndex,
  cardArray,
}: CardNextButtonProps) {
  //if the user is at the last card
  //TODO: add a different state when the user hasn't put in an answer vs when they have. ie. "submit" or "skip"
  if (cardIndex == cardArray.length - 1) {
    //onClick run function that needs to run whrn the user if finished with a "book"
    return <button>Finish</button>;
  } else {
    return (
      <button
        onClick={() => {
          setCardIndex(cardIndex + 1);
        }}
      >
        Submit
      </button>
    );
  }
}

//parameters are correct answer, users answer
//returns a boolean, true if the answer is correct, false if the answer is incorrect
function handleSubmit(correctAnswer: string, givenAnswer: string) {
  correctAnswer = correctAnswer.toLowerCase();
  givenAnswer = givenAnswer.toLowerCase();
  return correctAnswer === givenAnswer;
}

//how the overall object will be laid out
//might change if I decide to add the settings to the object aswell

let fillerData: Subject[] = [
  {
    title: "science",
    cardGroups: [
      {
        title: "test 1",
        dateCreated: 1,
        dateEdited: 1,
        cards: [
          {
            question: "What colour is the sky?",
            correctAnswer: "blue",
            incorrectAnswers: ["red", "green", "yellow"],
          },
          {
            question: "What colour is the grass?",
            correctAnswer: "green",
            incorrectAnswers: ["red", "blue", "yellow"],
          },
        ],
      },
      {
        title: "test 2",
        dateCreated: 1,
        dateEdited: 1,
        cards: [
          {
            question: "What colour is the sky?",
            correctAnswer: "blue",
            incorrectAnswers: ["red", "green", "yellow"],
          },
          {
            question: "What colour is the grass?",
            correctAnswer: "green",
            incorrectAnswers: ["red", "blue", "yellow"],
          },
        ],
      },
    ],
  },
  {
    title: "math",
    cardGroups: [
      {
        title: "test 1",
        dateCreated: 1,
        dateEdited: 1,
        cards: [
          {
            question: "What colour is the sky?",
            correctAnswer: "blue",
            incorrectAnswers: ["red", "green", "yellow"],
          },
          {
            question: "What colour is the grass?",
            correctAnswer: "green",
            incorrectAnswers: ["red", "blue", "yellow"],
          },
        ],
      },
    ],
  },
];

function FlashCard() {
  const [cardIndex, setCardIndex] = useState(0);
  const [cardAnswer, setCardAnswer] = useState("");

  const correctAnswer =
    fillerData[0].cardGroups[0].cards[cardIndex].correctAnswer;

  //TODO: change to only shuffle when a new card is chosen.
  const shuffledAnswers = shuffleArray([
    fillerData[0].cardGroups[0].cards[cardIndex].correctAnswer,
    ...fillerData[0].cardGroups[0].cards[cardIndex].incorrectAnswers,
  ]);
  return (
    <>
      <h3>{fillerData[0].cardGroups[0].cards[cardIndex].question}</h3>
      {shuffledAnswers.map((answer) => {
        return <button onClick={() => setCardAnswer(answer)}>{answer}</button>;
      })}
      <CardNextButton
        cardIndex={cardIndex}
        setCardIndex={setCardIndex}
        cardArray={fillerData[0].cardGroups[0].cards}
      />
    </>
  );
}

function HomePage({ subjectData }: { subjectData: Subject[] }) {
  let homeSections = subjectData.map((subject, subjectIndex, subjectArray) => (
    <>
      <p>{subject.title}</p>
      {subjectIndex === subjectArray.length - 1 && <p>Last Subject</p>}
      {subject.cardGroups.map((cardGroup, cardGroupIndex, cardGroupArray) => (
        <>
          <p>{cardGroup.title}</p>
          <p>Created: {cardGroup.dateCreated}</p>
          <p>Last Edited: {cardGroup.dateEdited}</p>
          {cardGroupIndex === cardGroupArray.length - 1 && (
            <p>Last Card Group</p>
          )}
        </>
      ))}
    </>
  ));
  return <>{homeSections}</>;
}

function App() {
  const [subjects, updateSubjects] = useState(fillerData);

  return (
    <>
      {/* <FlashCard /> */}
      <HomePage subjectData={subjects} />
    </>
  );
}

export default App;
