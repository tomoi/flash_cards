export interface Subject {
    title: string
    dateCreated: number
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

export interface subjectAddProps extends subjectInfoProps {
    toggleAddSubject: React.Dispatch<React.SetStateAction<boolean>>
}

export interface subjectEditProps extends subjectInfoProps {
    subjectIndex: number
    toggleEditSubject: React.Dispatch<React.SetStateAction<boolean>>
}

export interface addSubjectButtonProps {
    toggleAddSubject: React.Dispatch<React.SetStateAction<boolean>>
}

export interface addCardGroupButtonProps {
    toggleAddCardGroup: React.Dispatch<React.SetStateAction<boolean>>
    subjectIndex: number
    setEditSubjectIndex: React.Dispatch<React.SetStateAction<number>>
}
