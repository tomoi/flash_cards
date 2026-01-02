export interface Subject {
    title: string
    cardGroups: CardSet[]
}

interface CardSet {
    title: string
    dateCreated: number
    dateEdited: number
    cards: Card[]
}

interface Card {
    question: string
    correctAnswer: string
    incorrectAnswers: string[]
}

export interface CardNextButtonProps {
    cardIndex: number
    setCardIndex: React.Dispatch<React.SetStateAction<number>>
    cardArray: object[]
    cardAnswered: boolean
}

export interface subjectInfoProps {
    subjectData: Subject[]
    updateSubjectData: React.Dispatch<React.SetStateAction<Subject[]>>
}

export interface subjectEditProps extends subjectInfoProps {
    subjectIndex: number
    toggleEditSubjects: React.Dispatch<React.SetStateAction<boolean>>
}
