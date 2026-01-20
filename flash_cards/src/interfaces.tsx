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
    dateCreated: number
    question: string
    correctAnswer: string
    incorrectAnswers: string[]
}

export interface subjectInfoProps {
    subjectData: Subject[]
    updateSubjectData: React.Dispatch<React.SetStateAction<Subject[]>>
}

export interface subjectAddProps extends subjectInfoProps {
    toggleAddSubject: React.Dispatch<React.SetStateAction<boolean>>
}

export interface NewCardGroupProps {
    subjectData: Subject[]
    subjectIndex: number
    updateSubjectData: React.Dispatch<React.SetStateAction<Subject[]>>
    toggleAddCardGroup: React.Dispatch<React.SetStateAction<boolean>>
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

export interface cardDisplayTypes {
    propCardType:
        | 'default'
        | 'flip'
        | 'multipleChoice'
        | 'shortAnswer'
        | 'addCard'
        | 'editCard'
        | undefined
}

export interface CardControllerProps extends subjectInfoProps {
    cardIndex: [number, number, number]
    setCardIndex: React.Dispatch<React.SetStateAction<[number, number, number]>>
    toggleShowCard: React.Dispatch<React.SetStateAction<boolean>>
}

export interface FlashCardProps extends subjectInfoProps {
    cardIndex: [number, number, number]
    setCardIndex: React.Dispatch<React.SetStateAction<[number, number, number]>>
    setCardDisplayType: React.Dispatch<
        React.SetStateAction<
            | 'default'
            | 'flip'
            | 'multipleChoice'
            | 'shortAnswer'
            | 'addCard'
            | 'editCard'
            | undefined
        >
    >
}

export interface FlashCardGridProps {
    cardArray: Card[]
    setCardIndex: React.Dispatch<React.SetStateAction<[number, number, number]>>
    providedCardIndex: [number, number, number]
}

export interface CardExitProps {
    toggleShowCard: React.Dispatch<React.SetStateAction<boolean>>
}
