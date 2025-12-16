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
